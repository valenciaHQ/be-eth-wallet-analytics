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
    const etherscanApiKey = this.configService.get<string>(
      'accountService.apiKey',
    );

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

  getBalance(address: string): Observable<string> {
    const etherscanApiKey = this.configService.get<string>(
      'accountService.apiKey',
    );

    try {
      return this.httpService
        .get(
          `https://api.etherscan.io/api?module=account&action=balance&address=${address}&tag=latest&apikey=${etherscanApiKey}`,
          {
            headers: {
              Accept: 'application/json',
            },
          },
        )
        .pipe(
          map((response) => {
            const resultInWEI = response.data.result;
            const resultInETH = (
              (resultInWEI as number) / 1000000000000000000
            ).toFixed(3);
            return resultInETH;
          }),
        );
    } catch (error) {
      console.error(error);
    }
  }
}
