import { SystemService } from '../app/business/system.business';
declare class SystemController {
    private readonly appService;
    constructor(appService: SystemService);
    root(token: string): string;
}
export default SystemController;
