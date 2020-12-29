import { ErrorType } from '../enums/ErrorType'
import ApiError from '../models/ApiError';

export const invalidTransactionArguments = (argument: string, rule: string) =>{
    const errMsg = `${argument}: ${rule}`;
    return new ApiError(errMsg, ErrorType.INVALID_ARGS);
};

export const transactionNotFound = (id: string) =>{
    const errMsg = `Transaction with Id ${id} does not exist`;
    return new ApiError(errMsg, ErrorType.NOT_FOUND);
};

export const insufficientFunds = (funds: number) =>{
    const errMsg = `Insufficient funds: ${funds}`;
    return new ApiError(errMsg, ErrorType.INVALID_ARGS);
};

export const invalidIdSupplied = (id: any) => {
    const errMsg = `Invalid ID supplied: ${id}`;
    return new ApiError(errMsg, ErrorType.INVALID_ARGS);
}

