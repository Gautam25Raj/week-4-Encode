import { ApiProperty } from "@nestjs/swagger";

export class MintTokenDto {
  @ApiProperty({
    type: String,
    required: true,
    default: "0x6b1c724df21165d8107030fee46ae343fd98654d",
  })
  address: string;
  @ApiProperty({ type: String, required: true, default: "10" })
  value: string;
}
