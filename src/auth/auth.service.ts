/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { User, Note } from '@prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';
@Injectable({})
export class AuthService {
    constructor(private prismaService: PrismaService){

    }
    register(){
        return {
            message: 'Register ok'
        }
    }
    login(){
        return {
            message: 'Login ok'
        }
    }
}