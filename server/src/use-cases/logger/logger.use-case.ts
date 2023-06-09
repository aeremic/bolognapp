import { Inject, Injectable } from '@nestjs/common';
import { GenericUseCases } from '../generic.use-case';
import { LoggerEntity } from 'src/core/entities';
import { LoggerRepositoryAbstract } from 'src/core/abstracts/repositories/logger.repository.abstract';

@Injectable()
export class LoggerUseCases {
    @Inject(LoggerRepositoryAbstract)
    private loggerRepository: LoggerRepositoryAbstract

    async create(loggerEntity: LoggerEntity): Promise<LoggerEntity> {
        return this.loggerRepository.createOrUpdate(loggerEntity);
    }

    async log(code?: number, description?: string, stackTrace?: string) {
        try {
            let loggerEntity: LoggerEntity = {
                code: code,
                description: description,
                stackTrace: stackTrace
            };

            this.create(loggerEntity);
        } catch { }
    }
}