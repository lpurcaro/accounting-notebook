import * as BalanceService from "./service";

export const getAccountBalance = async (req, res) => {
    const balance = await BalanceService.getAccountBalance();
    res.json({ balance })
};
