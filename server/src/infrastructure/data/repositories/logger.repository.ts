import { Repository } from "typeorm";
import { InjectRepository } from "@nestjs/typeorm";
import { LoggerRepositoryAbstract } from "src/core/abstracts/repositories/logger.repository.abstract";
import { Logger } from "../models";
import { LoggerMapper } from "../mappers/logger.mapper";
import { LoggerEntity } from "src/core/entities";

export class LoggerRepository implements LoggerRepositoryAbstract {
    @InjectRepository(Logger)
    private readonly loggerModelRepository: Repository<Logger>

    //#region Implementation of Generic repository   

    async get(): Promise<LoggerEntity[]> {
        let result = await this.loggerModelRepository.find();

        return LoggerMapper.ToEntities(result);
    }

    async getById(id: number): Promise<LoggerEntity> {
        let result = await this.loggerModelRepository.findOneBy({ id: id })

        return LoggerMapper.ToEntity(result);
    }

    async createOrUpdate(loggerEntity: LoggerEntity): Promise<LoggerEntity> {
        let loggerModel: Logger = LoggerMapper.ToModel(loggerEntity);
        let result = await this.loggerModelRepository.save(loggerModel);

        return LoggerMapper.ToEntity(result);
    }

    async delete(id: number): Promise<number> {
        let result = await this.loggerModelRepository.delete({ id: id });

        return result.affected;
    }

    //#endregion
}