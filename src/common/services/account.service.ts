import { Injectable } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import { AxiosResponse } from 'axios';
import { Observable, map } from 'rxjs';

@Injectable()
export class AccountService {
  constructor(private readonly httpService: HttpService) {}

  getAllTransactions(address: string): Observable<AxiosResponse> {
    return this.httpService
      .get(
        `https://api.etherscan.io/api?module=account&action=txlist&address=${address}&sort=asc&apikey=${process.env.ETHERSCAN_KEY}`,
        {
          headers: {
            Accept: 'application/json',
          },
        },
      )
      .pipe(map((response) => response.data.result));
  }
}
