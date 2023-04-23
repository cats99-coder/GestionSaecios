import { Injectable } from '@nestjs/common';
import puppeteer from 'puppeteer';
import Handlebars from 'handlebars';
import * as fs from 'fs/promises';
import { join } from 'path';

@Injectable()
export class ReportesService {
  async getPdf(
    content: object,
    title: string,
    template: string,
  ): Promise<Array<number>> {
    //Preparar la base
    const filePathBase = join(process.cwd(), 'templates', `Base.hbs`);
    const htmlBase = await fs.readFile(filePathBase, { encoding: 'utf8' });
    const compileBase = Handlebars.compile(htmlBase);
    Handlebars.registerPartial('layout', compileBase);
    //Preparar contenido
    const filePath = join(process.cwd(), 'templates', `${template}.hbs`);
    const html = await fs.readFile(filePath, { encoding: 'utf8' });
    const compile = Handlebars.compile(html);
    const htmlCompiled = compile({ ...content });
    const browser = await puppeteer.launch({ headless: true });
    const page = await browser.newPage();
    await page.setContent(htmlCompiled);
    const pdf = await page.pdf({
      margin: { top: '0', right: '0', bottom: '0', left: '0' },
      printBackground: true,
      format: 'A4',
    });
    await browser.close();
    const pdfSafe = Array.from(pdf);
    return pdfSafe;
  }
  async listadoProductos(productos): Promise<Array<number>> {
    return await this.getPdf({ productos }, 'productos', 'Productos');
  }
}
