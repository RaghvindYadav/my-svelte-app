import {
  bgMockChannelsData,
  populateStore,
} from '@baragaun/bg-mock-channels-data';

let mockChannel: any = null;
let mockParticipants: string[] = [];
let totalMessages = 2000; // Store the total number of messages

async function testMockData(page = 0, pageSize = 100) {
  try {
    // Initialize the store with mock data only if it hasn't been initialized
    if (!mockChannel) {
      console.log('Initializing store with mock data...');
      const { channel, participantIds } = populateStore(totalMessages);
      mockChannel = channel;
      mockParticipants = participantIds;
    }

    // Fetch messages for current page
    const messages = await bgMockChannelsData.findChannelMessages(
      mockChannel.id,
      page * pageSize,
      pageSize
    );

    return {
      channel: mockChannel,
      participantIds: mockParticipants,
      messages,
      hasMore: (page + 1) * pageSize < totalMessages,
      totalMessages
    };
  } catch (error) {
    console.error('Error in mock data test:', error);
    throw error;
  }
}

export { testMockData };
