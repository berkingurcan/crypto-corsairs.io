use anchor_lang::prelude::*;

declare_id!("Fg6PaFpoGXkYsidMpWTK6W2BeZ7FEfcYkg476zPFsLnS");

#[program]
pub mod ahoy_there {
    use super::*;

    pub fn ahoy_there(ctx: Context<Initialize>) -> Result<()> {
        msg!("Ahoy there, me hearties!");
        Ok(())
    }
}

#[derive(Accounts)]
pub struct Initialize<> {}
