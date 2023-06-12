import { Injectable } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import { AxiosResponse } from 'axios';
import { Observable, map } from 'rxjs';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class AccountService {
  constructor(
    private readonly httpService: HttpService,
    private readonly configService: ConfigService,
  ) {}

  getAllTransactions(address: string): Observable<AxiosResponse> {
    const etherscanApiKey = this.configService.get<string>('apiKey.apiKey');

    return this.httpService
      .get(
        `https://api.etherscan.io/api?module=account&action=txlist&address=${address}&sort=asc&apikey=${etherscanApiKey}`,
        {
          headers: {
            Accept: 'application/json',
          },
        },
      )
      .pipe(map((response) => response.data.result));
  }

  getBalance(address: string): Observable<AxiosResponse> {
    const etherscanApiKey = this.configService.get<string>('apiKey.apiKey');

    return this.httpService
      .get(
        `https://api.etherscan.io/api?module=account&action=balance&address=${address}&tag=lastest&apikey=${etherscanApiKey}`,
        {
          headers: {
            Accept: 'application/json',
          },
        },
      )
      .pipe(map((response) => response.data.result));
  }
}
