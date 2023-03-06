import * as anchor from "@project-serum/anchor";
import { Program } from "@project-serum/anchor";
import { AhoyThere } from "../target/types/ahoy_there";

describe("ahoy-there", () => {
  // Configure the client to use the local cluster.
  anchor.setProvider(anchor.AnchorProvider.env());

  const program = anchor.workspace.AhoyThere as Program<AhoyThere>;
  console.log(program)

  it("Is initialized!", async () => {
    // Add your test here.

    const tx = await program.methods.ahoyThere().
    rpc();
    console.log("Your transaction signature", tx);
  });
});
