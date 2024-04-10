import { ApiProperty } from "@nestjs/swagger";

export class CastVoteDto {
  @ApiProperty({
    description: "Address of the ballot contract",
    type: String,
    required: true,
    example: "0xB36Ca0023231271e7584B1c57f49C2DF4f14aFDd",
  })
  ballotAddress: string;

  @ApiProperty({
    description: "Amount of voting power",
    type: BigInt,
    required: true,
    example: 10000n,
  })
  votingPowerAmount: bigint;

  @ApiProperty({
    description: "Index of the proposal",
    type: Number,
    required: true,
    example: 0n,
  })
  proposalIndex: number;
}
