import { Pipe, PipeTransform } from '@angular/core';
import { ValidationErrors }    from '@angular/forms';

export const FILLING_NEEDED_MESSAGE = 'Необходимо заполнить';
export const EMAIL_PATTERN_MESSAGE = 'Некорректный email';
export const PASSWORD_PATTERN_MESSAGE = 'Недопустимый формат пароля';
export const PHONE_PATTERN_MESSAGE = 'Недопустимый формат телефона';
export const MIN_LENGTH_SYMBOLS_MESSAGE = 'Не менее ... символов';
export const MAX_LENGTH_SYMBOLS_MESSAGE = 'Не более ... символов';
export const MIN_VALUE_MESSAGE = 'Не менее ...';
export const MAX_VALUE_MESSAGE = 'Не более ...';

export const EMAIL_PATTERN = '^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\\.[A-Za-z]{2,6}$';
export const PASSWORD_PATTERN = '^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{10,}$';

export const PATTERNS_LIST: { PATTERN: string, MESSAGE: string }[] = [
  {PATTERN: EMAIL_PATTERN, MESSAGE: EMAIL_PATTERN_MESSAGE},
  {PATTERN: PASSWORD_PATTERN, MESSAGE: PASSWORD_PATTERN_MESSAGE}
];

const getPatternMsg = (p: string): string => PATTERNS_LIST.find(x => x.PATTERN === p)?.MESSAGE;

@Pipe({name: 'reactiveValidationMessage'})
export class ReactiveValidationMessagePipe implements PipeTransform {
  transform(errors: ValidationErrors): any {
    return errors?.required ? FILLING_NEEDED_MESSAGE
      : errors?.minlength ? MIN_LENGTH_SYMBOLS_MESSAGE.replace('...', errors.minlength?.requiredLength)
        : errors?.maxlength ? MAX_LENGTH_SYMBOLS_MESSAGE.replace('...', errors.maxlength?.requiredLength)
          : errors?.min ? MIN_VALUE_MESSAGE.replace('...', errors.min?.min)
            : errors?.max ? MAX_VALUE_MESSAGE.replace('...', errors.max?.max)
              : errors?.pattern ? getPatternMsg(errors.pattern?.requiredPattern)
                : errors?.customError;
  }
}
