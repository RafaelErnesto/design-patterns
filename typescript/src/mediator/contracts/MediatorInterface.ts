import { Department } from '../departments/Department'

export interface MediatorInterface {
    
    notify(sender: Department, event: string, data: string):void
}