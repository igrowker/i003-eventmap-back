import { Controller } from "@nestjs/common";

@Controller('/events')
export class MailController {
    // @Post('forgot-password')
    // async forgotPassword(@Body() forgotPasswordDto: ForgotPasswordDto) {
    //     return await this.authService.requestPasswordReset(forgotPasswordDto);
    // }

    // @Get('verify-token')
    // async verifyToken(@Query('token') token: string): Promise<{ message: string; user: User }> {
    //     const user = await this.authService.verifyToken(token);
    //     return { message: 'Token verificado correctamente', user };
    // }

    // @Post('reset-password')
    // async resetPassword(@Query('token') token: string, @Body() resetPasswordDto: ResetPasswordDto) {
    //     return await this.authService.resetPassword(token, resetPasswordDto);
    // }
}