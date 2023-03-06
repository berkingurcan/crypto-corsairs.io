use anchor_lang::prelude::*;

declare_id!("Fg6PaFpoGXkYsidMpWTK6W2BeZ7FEfcYkg476zPFsLnS");

#[program]
pub mod ahoy_there {
    use super::*;

    pub fn ahoy_there(ctx: Context<Initialize>, number_of_crew: u64) -> Result<()> {
        ctx.accounts.number_account.number_of_crew = number_of_crew;
        msg!("Ahoy there, me hearties!");
        Ok(())
    }
}

#[account]
#[derive(Default)]
pub struct NumberAccount {
    number_of_crew: u64
}

#[derive(Accounts)]
pub struct Initialize<'info> {
    #[account(mut)]
    pub number_account: Account<'info, NumberAccount>
}
