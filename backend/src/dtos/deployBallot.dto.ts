import { ApiProperty } from "@nestjs/swagger";

export class DeployBallotDto {
  @ApiProperty({
    description: "List of proposal names",
    type: [String],
    required: true,
    example: [
      "0x0000000000000000000000000000000000000000000000000000000000000001",
      "0x0000000000000000000000000000000000000000000000000000000000000002",
      "0x0000000000000000000000000000000000000000000000000000000000000003",
    ],
  })
  proposalNames: string[];

  @ApiProperty({
    description: "Address of the token contract",
    type: String,
    required: true,
    example: "0x2c14f5e9e0fe99af55c97b5fcbc3d61fdb5f4115",
  })
  tokenContractAddress: string;

  @ApiProperty({
    description: "Target block number for the ballot to end",
    type: Number,
    required: true,
    example: 0000000,
  })
  targetBlockNumber: bigint;
}
