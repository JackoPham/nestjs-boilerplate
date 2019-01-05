import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { ProductModule } from '@module/product.module';
import { PermissionModule } from '@module/permission.module';
import { SystemModule } from '@module/system.module';

export default class SwaggerSetting {
  static init(app: any) {
    const options = new DocumentBuilder()
      .setTitle('product docs')
      .setDescription('The product API description')
      .setVersion('1.0')
      .setBasePath('api')
      .build();
    const document = SwaggerModule.createDocument(app, options, {
      include: [ProductModule, SystemModule],
    });
    SwaggerModule.setup('docs/product', app, document);

    const permissionOptions = new DocumentBuilder()
      .setTitle('permission docs')
      .setDescription('The permission API description')
      .setVersion('1.0')
      .setBasePath('api')
      .build();
    const documentPermission = SwaggerModule.createDocument(
      app,
      permissionOptions,
      {
        include: [PermissionModule],
      }
    );
    SwaggerModule.setup('docs/permission', app, documentPermission);
  }
}
