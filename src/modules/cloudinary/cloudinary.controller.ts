import { Controller, Get, Post, Body, Param, Delete, UseInterceptors, UploadedFiles } from '@nestjs/common';
import { CloudinaryService } from './cloudinary.service';
import { CreateCloudinaryDto } from './dto/create-cloudinary.dto';
import { DeleteCloudinaryDto } from './dto/delete-cloudinary.dto';
import { FilesInterceptor } from '@nestjs/platform-express';

@Controller('cloudinary')
export class CloudinaryController {
  constructor(private readonly cloudinaryService: CloudinaryService) {}

  @Post()
  @UseInterceptors(FilesInterceptor('files'))
  create(
    @Body() createCloudinaryDto: CreateCloudinaryDto,
    @UploadedFiles() files: Array<Express.Multer.File>
  ) {
    return this.cloudinaryService.uploadFilesToCloudinary(files);
  }

  @Get()
  findAll() {
    return this.cloudinaryService.getAllImagesCloudinary();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.cloudinaryService.getImgByIdCloudinary(id);
  }

  @Delete(':id')
  remove(
    @Body() deleteCloudinaryDto : DeleteCloudinaryDto
  ) {
    return this.cloudinaryService.deleteImgCloudinary(deleteCloudinaryDto.photos);
  }
}
