import * as moment from 'moment';
import {Column, BaseEntity} from 'typeorm';
class BaseModel extends BaseEntity {
    @Column()
    createdDate: Date;
    @Column({nullable: true})
    updatedDate: Date;
    @Column({nullable: true})
    deletedDate: Date;

    constructor() {
        super();
        this.createdDate = moment.utc().toDate();
    }
}

export default BaseModel;
