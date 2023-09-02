export interface ChatbotType {
  id: number;
  name: string;
  image: string;
  primary: string;
  secondary: string;
}

export interface MessageType {
  id: number;
  sender: string;
  createdAt: string;
  message: string;
}
