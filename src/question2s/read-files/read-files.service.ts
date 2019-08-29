import { Injectable } from '@nestjs/common';
import { FileEmptyException } from './exceptions/file-empty.exception';

@Injectable()
export class ReadFilesService {
    read(file: any): string {
        if (!file) {
            throw new FileEmptyException();
        }

        const data = file.buffer.toString();
        const lines = data.split('\n');

        const names: Array<{ firstname: string, lastname: string }> = [];
        for (let i = 0; i < lines.length; i++) {
            if (i > 0) {
                const values = lines[i].split(',');
                names.push({ firstname: values[0].trim(), lastname: values[1].trim() });
            }
        }

        names.sort((lhs, rhs) => (lhs.lastname > rhs.lastname) ? 1 : -1);

        const stringResult = names.map((name) => {
            return `${name.firstname} ${name.lastname}\n`;
        }).reduce((sum: string, line: string) => {
            return sum + line;
        }, '');

        return stringResult;
    }
}
