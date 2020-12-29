import { ErrorType } from '../enums/ErrorType';

export const errorHandler = (error, req, res, next) => {
    if (error.type === ErrorType.INVALID_ARGS) {
        res.status(400)
    } else if (error.type === ErrorType.NOT_FOUND) {
        res.status(404)
    } else if (error.type === ErrorType.INTERNAL_ERROR) {
        res.status(500)
    } else {
        res.status(520)
    }

    res.json({message: error.message})
}
