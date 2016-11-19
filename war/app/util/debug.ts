import { Injectable } from '@angular/core';

import { Constants } from '../constant/constants';

@Injectable()
export class LogUtil{
	d(tag: string, log: string): void{
		if(Constants.IS_DEBUG){
			console.log(tag + "/" + log);
		}
	}
}