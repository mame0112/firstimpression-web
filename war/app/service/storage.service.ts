import { Injectable } from '@angular/core';

export enum STORAGE_KEY {
	USER_NAME,
	PASSWORD,
	USER_THUMBNAIL,
	ANSWERED_QUESTIONS,
	CREATED_QUESTIONS
}

@Injectable()
export class LocalStorageService {

	set(key, value): void{
		if(key == null){
			throw "key cannot be null nor undefined";
		}

		if(value == null){
			throw "value cannot be null nor undefined";
		}

		localStorage.setItem(key ,JSON.stringify(value))
	}

	get(key){

		if(key == null){
			throw "key cannot be null nor undefined";
		}

		return JSON.parse(localStorage.getItem(key));
	}
}