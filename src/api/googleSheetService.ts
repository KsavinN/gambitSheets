// import axios from 'axios';

// export class GoogleSheetService {
//   private static instance: GoogleSheetService;
//   private baseUrl: string;

//   private constructor() {
//     this.baseUrl = process.env.GOOGLE_SHEETS_SERVICE_URL || 'http://localhost:3002';
//   }

//   public static getInstance(): GoogleSheetService {
//     if (!GoogleSheetService.instance) {
//       GoogleSheetService.instance = new GoogleSheetService();
//     }
//     return GoogleSheetService.instance;
//   }

//   /**
//    * Triggers a sync of the Google Sheet with the latest odds data
//    * @returns Promise with sync status
//    */
//   async syncSheet(): Promise<{
//     success: boolean;
//     message: string;
//     spreadsheetId: string;
//     updatedAt: string;
//   }> {
//     try {
//       const response = await axios.get(`${this.baseUrl}/sheets-sync`);
//       return response.data;
//     } catch (error) {
//       if (axios.isAxiosError(error)) {
//         throw new Error(`Failed to sync Google Sheet: ${error.response?.data?.error || error.message}`);
//       }
//       throw new Error('Failed to sync Google Sheet: Unknown error');
//     }
//   }
// }
