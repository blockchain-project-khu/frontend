
export enum FundingStatus {
  PENDING = 'PENDING',
  APPROVED = 'APPROVED',
  REJECTED = 'REJECTED',
  COMPLETED = 'COMPLETED'
}

export interface FundingRequestDto {
  amount: number;
}

export interface FundingResponseDto {
  fundingId: number;
  userId: number;
  propertyId: number;
  amount: number;
  status: FundingStatus;
}

export interface CreateFundingResponse {
  fundingId: number;
}
