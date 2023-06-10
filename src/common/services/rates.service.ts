import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import { AxiosResponse } from 'axios';
import { Observable, map } from 'rxjs';
import { ETHPriceResponse } from '../interfaces/rates';

@Injectable()
export class RatesService {
  constructor(private readonly httpService: HttpService) {}

  //Using this API since Etherscan does not have EUR rate
  getEthRate(): Observable<AxiosResponse<ETHPriceResponse, any>> {
    try {
      return this.httpService
        .get(
          `https://min-api.cryptocompare.com/data/price?fsym=ETH&tsyms=USD,EUR`,
          {
            headers: {
              Accept: 'application/json',
            },
          },
        )
        .pipe(map((response) => response.data));
    } catch (error) {
      throw new HttpException(
        {
          status: HttpStatus.INTERNAL_SERVER_ERROR,
          error: 'An error ocurred',
        },
        HttpStatus.INTERNAL_SERVER_ERROR,
        {
          cause: error,
        },
      );
    }
  }
}
