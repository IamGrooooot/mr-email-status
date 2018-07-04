export interface IMessageInboxActive {
  "content": string;
  "received": string;
  "correspondent":string;
  "delivery": string;
  "viewed": string[];
  "isn": number;
  "active": boolean;
}

export interface IMessageInboxInactive {
  "content": string;
  "received": string;
  "correspondent":string;
  "delivery": string;
  "status": string;
  "actuary": string;
  "isn": number;
  "active": boolean;
}