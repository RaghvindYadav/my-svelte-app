<script lang="ts">
  import { onMount } from 'svelte';
  import { goto } from '$app/navigation';
  import { oAuthConfig, handleOAuthSignIn } from '$lib/auth/social-auth';
  
  let googleLoaded = false;
  let facebookLoaded = false;
  
  onMount(() => {
    // Load Google SDK
    const googleScript = document.createElement('script');
    googleScript.src = 'https://accounts.google.com/gsi/client';
    googleScript.async = true;
    googleScript.defer = true;
    googleScript.onload = () => {
      googleLoaded = true;
      initializeGoogle();
    };
    document.head.appendChild(googleScript);

    // Load Facebook SDK
    const fbScript = document.createElement('script');
    fbScript.src = 'https://connect.facebook.net/en_US/sdk.js';
    fbScript.async = true;
    fbScript.defer = true;
    fbScript.onload = () => {
      facebookLoaded = true;
      initializeFacebook();
    };
    document.head.appendChild(fbScript);
  });

  function initializeGoogle() {
    window.google?.accounts.id.initialize({
      client_id: oAuthConfig.google.clientId,
      callback: handleGoogleSignIn
    });
  }

  function initializeFacebook() {
    FB.init({
      appId: oAuthConfig.facebook.appId,
      cookie: true,
      xfbml: true,
      version: 'v18.0'
    });
  }

  async function handleGoogleSignIn(response: any) {
    try {
      const decoded = JSON.parse(atob(response.credential.split('.')[1]));
      const userData = {
        email: decoded.email,
        firstName: decoded.given_name,
        lastName: decoded.family_name,
        displayName: decoded.name,
        avatarUrl: decoded.picture,
        provider: 'google' as const,
        providerId: decoded.sub,
        accessToken: response.credential
      };

      await handleOAuthSignIn(userData);
      goto('/home');
    } catch (error) {
      console.error('Google sign-in error:', error);
    }
  }

  async function handleFacebookSignIn() {
    try {
      const response = await new Promise((resolve, reject) => {
        FB.login((response) => {
          if (response.authResponse) {
            resolve(response);
          } else {
            reject(new Error('Facebook login failed'));
          }
        }, { scope: oAuthConfig.facebook.scope });
      });

      FB.api('/me', { fields: 'email,first_name,last_name,name,picture' }, async (userInfo: any) => {
        const userData = {
          email: userInfo.email,
          firstName: userInfo.first_name,
          lastName: userInfo.last_name,
          displayName: userInfo.name,
          avatarUrl: userInfo.picture?.data?.url,
          provider: 'facebook' as const,
          providerId: userInfo.id,
          accessToken: response.authResponse.accessToken
        };

        await handleOAuthSignIn(userData);
        goto('/home');
      });
    } catch (error) {
      console.error('Facebook sign-in error:', error);
    }
  }
</script>

<div class="social-auth-container">
  <div id="g_id_onload" 
       data-client_id={oAuthConfig.google.clientId}
       data-context="signin"
       data-callback="handleGoogleSignIn">
  </div>
  
  <div class="g_id_signin" 
       data-type="standard" 
       data-size="large" 
       data-theme="outline" 
       data-text="signin_with" 
       data-shape="rectangular" 
       data-logo_alignment="left">
  </div>

  <button 
    class="facebook-login-button"
    on:click={handleFacebookSignIn}
    disabled={!facebookLoaded}>
    Sign in with Facebook
  </button>
</div>

<style>
  .social-auth-container {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    margin: 1rem 0;
  }

  .facebook-login-button {
    background-color: #1877f2;
    color: white;
    border: none;
    padding: 0.5rem 1rem;
    border-radius: 4px;
    cursor: pointer;
    font-size: 1rem;
  }

  .facebook-login-button:disabled {
    opacity: 0.7;
    cursor: not-allowed;
  }
</style>