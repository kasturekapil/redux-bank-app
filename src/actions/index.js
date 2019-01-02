export function withdrawCash (cash) {
    return {
        type: "CASH_WITHDRAW",
        updatedcash: cash
    }
} 
