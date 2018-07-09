export interface IMessageInboxActiveOld {
  "content": string;
  "received": string;
  "correspondent":string;
  "delivery": string;
  "viewed": string[];
  "isn": number;
  "active": boolean;
}

export interface IMessageInboxActive {
  "checkbox": boolean;
  "new": boolean;
  "from": string;
  "email": string;
  "recipient": string;
  "received": string;
  "topic": string;
  "pass":string;
  "whom": string;
  "doc_num": string;
  "viewed": string[];
  "isn": number;
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