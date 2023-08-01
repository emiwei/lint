import { Schema, model, models } from 'mongoose';

const NetWorthSchema = new Schema({
    owner: {
        type: Schema.Types.ObjectId,
        ref: 'User',
    },
    date: {
        type: String,
    },
    amount: {
        type: Float64Array,
    }
});

const NetWorth = models.NetWorth || model("NetWorth", NetWorth);

export default NetWorth;