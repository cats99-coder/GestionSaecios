import { Injectable, StreamableFile } from '@nestjs/common';
import puppeteer from 'puppeteer';
import Handlebars from 'handlebars';
import * as fs from 'fs/promises';
import { join } from 'path';

@Injectable()
export class ReportesService {
  async getHello(productos): Promise<any> {
    const filePath = join(process.cwd(), 'templates', 'Base.hbs');
    const html = await fs.readFile(filePath, { encoding: 'utf8' });
    const compile = Handlebars.compile(html);
    const htmlCompiled = compile({ productos });

    const browser = await puppeteer.launch({
      args: ['--no-sandbox'],
      // executablePath: 'C://Program Files/Google/Chrome/Application/chrome.exe',
      headless: true,
    });
    const page = await browser.newPage();
    await page.setContent(htmlCompiled);

    const pdf = await page.pdf({
      path: './result.pdf',
      margin: { top: '100px', right: '50px', bottom: '100px', left: '50px' },
      printBackground: true,
      format: 'A4',
    });
    return new StreamableFile(pdf);
  }
}
