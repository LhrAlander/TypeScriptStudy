import { StringValidator } from './Validation'

const numberRegexp = /^[0-9]+$/

export class ZipCodeValidator implements StringValidator {
	isAcceptable(s: string) {
		return numberRegexp.test(s)
	}
}
