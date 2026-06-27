export const translations = {
  en: {
    siteName: 'JSON Tools',
    siteDesc: 'Free online JSON formatter, validator, and beautifier',
    
    nav: {
      format: 'Format',
      encode: 'Encode',
      dev: 'Dev',
      convert: 'Convert',
      generate: 'Generate',
      jsonFormatter: 'JSON Formatter',
      xmlFormatter: 'XML Formatter',
      base64: 'Base64',
      urlEncoder: 'URL Encoder',
      hash: 'Hash',
      timestamp: 'Timestamp',
      diff: 'Diff',
      regex: 'Regex Tester',
      color: 'Color Converter',
      unit: 'Unit Converter',
      markdown: 'Markdown Editor',
      jwt: 'JWT Decoder',
      uuid: 'UUID Generator',
      cron: 'Cron Parser',
      qrcode: 'QR Code',
    },
    
    common: {
      input: 'Input',
      output: 'Output',
      copy: 'Copy',
      copied: 'Copied!',
      clear: 'Clear',
      process: 'Process',
      format: 'Format / Beautify',
      minify: 'Minify',
      encode: 'Encode',
      decode: 'Decode',
      error: 'Error',
      invalidXml: 'Invalid XML',
      invalidJwt: 'Invalid JWT format',
    },
    
    tools: {
      jsonFormatter: {
        title: 'JSON Formatter and Validator',
        desc: 'Format, validate, and minify JSON data. Free, fast, and secure — all processing happens in your browser.',
        inputPlaceholder: 'Paste your JSON here...',
        outputPlaceholder: 'Formatted JSON will appear here...',
        inputLabel: 'Input JSON',
        outputLabel: 'Output',
      },
      
      base64: {
        title: 'Base64 Encoder / Decoder',
        desc: 'Encode or decode Base64 strings. Fast, free, and browser-side.',
        inputPlaceholder: 'Enter text or Base64 string...',
        outputPlaceholder: 'Result will appear here...',
        encode: 'Encode (Text → Base64)',
        decode: 'Decode (Base64 → Text)',
      },
      
      urlEncoder: {
        title: 'URL Encoder / Decoder',
        desc: 'Encode or decode URL components.',
        inputPlaceholder: 'Enter URL or text...',
        outputPlaceholder: 'Result will appear here...',
      },
      
      hash: {
        title: 'Hash Generator',
        desc: 'Generate SHA-256 and SHA-1 hashes from text.',
        inputPlaceholder: 'Enter text to hash...',
        outputPlaceholder: 'Hash will appear here...',
        sha256: 'SHA-256',
        sha1: 'SHA-1',
      },
      
      timestamp: {
        title: 'Unix Timestamp Converter',
        desc: 'Convert Unix timestamps to dates and vice versa.',
        inputPlaceholder: 'Enter timestamp...',
        current: 'Current timestamp',
        toDate: 'To Date',
        toTimestamp: 'To Timestamp',
      },
      
      diff: {
        title: 'Text Diff Tool',
        desc: 'Compare two texts and highlight differences.',
        input1Label: 'Original Text',
        input2Label: 'Modified Text',
        input1Placeholder: 'Paste original text here...',
        input2Placeholder: 'Paste modified text here...',
        noDifferences: 'No differences found',
      },
      
      xmlFormatter: {
        title: 'XML Formatter',
        desc: 'Format and beautify XML documents.',
        comingSoon: 'This tool is under development.',
        inputPlaceholder: 'Paste your XML here...',
        outputPlaceholder: 'Formatted XML will appear here...',
      },
      
      regex: {
        title: 'Regex Tester',
        desc: 'Test regular expressions with live matching.',
        patternLabel: 'Pattern',
        patternPlaceholder: 'Enter regex pattern...',
        flagGlobal: 'Global',
        flagCaseInsensitive: 'Case insensitive',
        flagMultiline: 'Multiline',
        flagDotAll: 'Dot all',
        testStringLabel: 'Test string',
        testStringPlaceholder: 'Enter text to test against...',
        matchesLabel: 'Matches',
        matchesPlaceholder: 'Matches will be highlighted here...',
        matchDetailsLabel: 'Match details',
        noMatchesYet: 'No matches yet',
        enterPatternAndString: 'Enter pattern and test string...',
        invalidRegex: 'Invalid regex',
        noMatches: 'No matches',
      },
      
      color: {
        title: 'Color Converter',
        desc: 'Convert colors between HEX, RGB, HSL, RGBA formats.',
        colorPicker: 'Color Picker',
        hex: 'HEX',
        rgb: 'RGB',
        hsl: 'HSL',
        rgba: 'RGBA',
        alpha: 'Alpha (Opacity)',
        cssVariables: 'CSS Variables',
      },
      
      unit: {
        title: 'Unit Converter',
        desc: 'Convert length, weight, temperature, data, time units.',
        categoryLength: 'Length',
        categoryWeight: 'Weight',
        categoryTemperature: 'Temperature',
        categoryData: 'Data',
        categoryTime: 'Time',
        fromLabel: 'From',
        toLabel: 'To',
        valuePlaceholder: 'Enter value...',
        resultLabel: 'Result',
      },
      
      markdown: {
        title: 'Markdown Editor',
        desc: 'Write and preview Markdown in real-time.',
        editorLabel: 'Markdown',
        previewLabel: 'Preview',
        inputPlaceholder: 'Write your Markdown here...',
        defaultContent: '# Welcome to Markdown Editor\n\nThis is a **live preview** editor. Start typing on the left to see the result on the right!\n\n## Features\n- **Bold** and *italic* text\n- [Links](https://example.com)\n- Lists and more',
      },
      
      jwt: {
        title: 'JWT Decoder',
        desc: 'Decode JSON Web Tokens and view header, payload, and signature.',
        inputLabel: 'JWT Token',
        inputPlaceholder: 'Paste your JWT token here...',
        headerLabel: 'Header (decoded)',
        headerPlaceholder: 'JWT header will appear here...',
        payloadLabel: 'Payload (decoded)',
        payloadPlaceholder: 'JWT payload will appear here...',
        signatureLabel: 'Signature (base64)',
        signaturePlaceholder: 'JWT signature...',
        decode: 'Decode JWT',
      },
      
      uuid: {
        title: 'UUID Generator',
        desc: 'Generate random UUID v4 identifiers.',
        countLabel: 'Count',
        generate: 'Generate UUIDs',
        copyAll: 'Copy All',
        outputLabel: 'Generated UUIDs',
        outputPlaceholder: 'Generated UUIDs will appear here...',
      },
      
      cron: {
        title: 'Cron Parser',
        desc: 'Parse cron expressions and see human-readable descriptions.',
        inputLabel: 'Cron Expression',
        inputPlaceholder: 'e.g., 0 9 * * 1-5',
        presetsLabel: 'Presets',
        everyHour: 'Every Hour',
        everyDay: 'Every Day',
        everyWeek: 'Every Week',
        everyMonth: 'Every Month',
        every5min: 'Every 5 Min',
        parse: 'Parse',
        resultLabel: 'Human-Readable Description',
        fieldMinute: 'Minute',
        fieldHour: 'Hour',
        fieldDay: 'Day',
        fieldMonth: 'Month',
        fieldWeekday: 'Weekday',
        invalidExpression: 'Invalid cron expression',
        everyMinute: 'Every minute',
        everyNMinutes: 'Every {{n}} minutes',
        atMinute: 'At minute {{n}}',
        everyNHours: ', every {{n}} hours',
        ofHour: ' of hour {{n}}',
        onDay: ', on day {{n}} of the month',
        inMonth: ', in {{month}}',
        onWeekday: ', on {{day}}',
        months: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
        weekdays: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
      },
      
      qrcode: {
        title: 'QR Code Generator',
        desc: 'Generate QR codes from text or URLs.',
        inputLabel: 'Content',
        inputPlaceholder: 'Enter text or URL to encode...',
        sizeLabel: 'Size',
        colorLabel: 'Color',
        generate: 'Generate',
        download: 'Download',
        placeholder: 'QR code will appear here',
        enterText: 'Please enter text or URL',
        generateFirst: 'Generate QR code first',
      },
    },
    
    footer: {
      privacy: '🔒 100% browser-side processing — your data never leaves your computer',
    },
    
    seo: {
      home: { title: 'JSON Formatter and Validator - Free Online JSON Tool', description: 'Free online JSON formatter, validator, and beautifier. Format, minify, and validate JSON data instantly. No signup, 100% browser-side processing.', keywords: 'json formatter, json validator, json beautifier, online json tool' },
      json: { title: 'JSON Formatter - Format, Validate and Beautify JSON', description: 'Free online JSON formatter. Format, validate, minify and beautify JSON data. Instant processing, no signup required.', keywords: 'json formatter, json validator, json beautifier, json minify' },
      xml: { title: 'XML Formatter - Format and Beautify XML Documents', description: 'Free online XML formatter. Format and beautify XML documents instantly. Browser-side processing.', keywords: 'xml formatter, xml beautifier, xml validator, online xml tool' },
      base64: { title: 'Base64 Encoder/Decoder - Online Base64 Tool', description: 'Free online Base64 encoder and decoder. Encode text to Base64 or decode Base64 to text instantly.', keywords: 'base64 encoder, base64 decoder, base64 online, encode decode' },
      url: { title: 'URL Encoder/Decoder - Encode URL Components', description: 'Free online URL encoder and decoder. Encode or decode URL components and query strings.', keywords: 'url encoder, url decoder, encode url, url encoding' },
      hash: { title: 'Hash Generator - SHA-256 and SHA-1 Hash Tool', description: 'Free online hash generator. Generate SHA-256 and SHA-1 hashes from text instantly.', keywords: 'hash generator, sha256, sha-1, hash online' },
      timestamp: { title: 'Unix Timestamp Converter - Date to Timestamp', description: 'Free online Unix timestamp converter. Convert timestamps to dates and vice versa.', keywords: 'timestamp converter, unix timestamp, epoch converter' },
      diff: { title: 'Text Diff Tool - Compare Two Texts', description: 'Free online diff tool. Compare two texts and highlight differences side by side.', keywords: 'diff tool, text compare, compare texts, diff online' },
      regex: { title: 'Regex Tester - Test Regular Expressions', description: 'Free online regex tester. Test regular expressions with live matching and highlighting.', keywords: 'regex tester, regular expression, regex online, test regex' },
      color: { title: 'Color Converter - HEX RGB HSL Conversion', description: 'Free online color converter. Convert colors between HEX, RGB, HSL, RGBA formats.', keywords: 'color converter, hex to rgb, rgb to hex, color tool' },
      unit: { title: 'Unit Converter - Length Weight Temperature', description: 'Free online unit converter. Convert length, weight, temperature, data, time units.', keywords: 'unit converter, convert units, length converter, weight converter' },
      markdown: { title: 'Markdown Editor - Write and Preview Markdown', description: 'Free online Markdown editor. Write and preview Markdown in real-time with syntax highlighting.', keywords: 'markdown editor, markdown preview, md editor, online markdown' },
      jwt: { title: 'JWT Decoder - Decode JSON Web Tokens', description: 'Free online JWT decoder. Decode JSON Web Tokens and view header, payload, signature.', keywords: 'jwt decoder, jwt token, decode jwt, jwt online' },
      uuid: { title: 'UUID Generator - Generate UUID v4', description: 'Free online UUID generator. Generate random UUID v4 identifiers instantly.', keywords: 'uuid generator, uuid v4, generate uuid, guid generator' },
      cron: { title: 'Cron Parser - Parse Cron Expressions', description: 'Free online cron parser. Parse cron expressions and get human-readable descriptions.', keywords: 'cron parser, cron expression, cron schedule, crontab' },
      qrcode: { title: 'QR Code Generator - Generate QR Codes', description: 'Free online QR code generator. Generate QR codes from text or URLs instantly.', keywords: 'qr code generator, generate qr, qr online, qr code' },
      privacy: { title: 'Privacy Policy - JSON Tools', description: 'Learn how JSON Tools handles your data. 100% browser-side processing, no data collection, no tracking cookies.', keywords: 'privacy policy, data protection, browser-side processing' },
      about: { title: 'About JSON Tools - Free Online Developer Utilities', description: 'JSON Tools provides 15+ free online developer utilities. Privacy-first, instant results, multi-language support.', keywords: 'about json tools, free developer tools, online utilities' },
      terms: { title: 'Terms of Service - JSON Tools', description: 'Terms of service for JSON Tools. Free online developer utilities with browser-side processing.', keywords: 'terms of service, usage terms, legal' },
    },
    
    pages: {
      privacy: {
        title: 'Privacy Policy',
        lastUpdated: 'Last updated: June 24, 2026',
        intro: 'At JSON Tools, we take your privacy seriously. This policy explains how we handle your data when you use our website at tools.nextapi.pro.',
        dataCollection: { title: 'Data Collection', content: 'We do not collect, store, or transmit any personal data. All data processing (JSON formatting, Base64 encoding, hashing, etc.) happens entirely in your browser using JavaScript. Your data never leaves your device.' },
        cookies: { title: 'Cookies & Local Storage', content: 'We use localStorage to save your language preference and dark mode setting. We do not use tracking cookies. Google AdSense may use cookies to serve relevant ads.' },
        thirdParty: { title: 'Third-Party Services', content: 'We use Google AdSense to display advertisements. Google may collect anonymous usage data through ad cookies. For more information, see Google\'s Privacy Policy.' },
        security: { title: 'Security', content: 'Since all processing happens in your browser, your data is as secure as your device. We use HTTPS to encrypt all communications.' },
        changes: { title: 'Changes to This Policy', content: 'We may update this privacy policy from time to time. Any changes will be posted on this page with an updated date.' },
        contact: { title: 'Contact', content: 'If you have questions about this privacy policy, please contact us at privacy@nextapi.pro.' }
      },
      about: {
        title: 'About JSON Tools',
        mission: { title: 'Our Mission', content: 'JSON Tools provides free, high-quality developer utilities that respect your privacy. We believe powerful tools should be accessible to everyone without sacrificing data security.' },
        whatWeDo: { title: 'What We Do', content: 'We offer 15+ online tools for developers, including JSON/XML formatting, Base64 encoding, URL encoding, hash generation, timestamp conversion, text diffing, regex testing, color conversion, unit conversion, Markdown editing, JWT decoding, UUID generation, cron parsing, and QR code generation.' },
        features: { title: 'Why Choose JSON Tools?', items: ['🔒 100% browser-side processing', '⚡ Instant results', '🌍 Multi-language support', '🌙 Dark mode', '📱 Mobile-friendly', '🆓 Completely free'] },
        openSource: { title: 'Open Source', content: 'JSON Tools is built with modern web technologies and hosted on Cloudflare.' },
        contact: { title: 'Contact', content: 'Have suggestions or found a bug? Reach us at contact@nextapi.pro.' }
      },
      terms: {
        title: 'Terms of Service',
        lastUpdated: 'Last updated: June 24, 2026',
        acceptance: 'By accessing and using JSON Tools (tools.nextapi.pro), you agree to be bound by these terms. If you do not agree, please do not use our services.',
        use: { title: 'Use of Service', content: 'JSON Tools provides free online developer utilities. All processing happens in your browser. You may use these tools for personal or commercial purposes.' },
        ip: { title: 'Intellectual Property', content: 'The content, design, and code of JSON Tools are protected by copyright. You may not copy, modify, or redistribute our source code without permission.' },
        disclaimer: { title: 'Disclaimer', content: 'JSON Tools is provided "as is" without warranties of any kind. We do not guarantee the accuracy of results from any tool.' },
        changes: { title: 'Changes to Terms', content: 'We reserve the right to modify these terms at any time. Continued use of the service after changes constitutes acceptance of the new terms.' },
        governing: { title: 'Governing Law', content: 'These terms shall be governed by and construed in accordance with applicable laws.' }
      }
    },
  },
  
  zh: {
    siteName: 'JSON 工具',
    siteDesc: '免费在线 JSON 格式化、验证和美化工具',
    
    nav: {
      format: '格式',
      encode: '编码',
      dev: '开发',
      convert: '转换',
      generate: '生成',
      jsonFormatter: 'JSON 格式化',
      xmlFormatter: 'XML 格式化',
      base64: 'Base64',
      urlEncoder: 'URL 编码',
      hash: '哈希',
      timestamp: '时间戳',
      diff: '对比',
      regex: '正则测试',
      color: '颜色转换',
      unit: '单位转换',
      markdown: 'Markdown',
      jwt: 'JWT 解析',
      uuid: 'UUID 生成',
      cron: 'Cron 解析',
      qrcode: '二维码',
    },
    
    common: {
      input: '输入',
      output: '输出',
      copy: '复制',
      copied: '已复制!',
      clear: '清空',
      process: '处理',
      format: '格式化',
      minify: '压缩',
      encode: '编码',
      decode: '解码',
      error: '错误',
      invalidXml: '无效的XML',
      invalidJwt: '无效的JWT格式',
    },
    
    tools: {
      jsonFormatter: {
        title: 'JSON 格式化与验证',
        desc: '格式化、验证和压缩 JSON 数据。免费、快速、安全 — 所有处理都在浏览器中完成。',
        inputPlaceholder: '在此粘贴 JSON...',
        outputPlaceholder: '格式化的 JSON 将显示在这里...',
        inputLabel: '输入 JSON',
        outputLabel: '输出',
      },
      
      base64: {
        title: 'Base64 编码/解码',
        desc: '编码或解码 Base64 字符串。快速、免费、浏览器端处理。',
        inputPlaceholder: '输入文本或 Base64 字符串...',
        outputPlaceholder: '结果将显示在这里...',
        encode: '编码 (文本 → Base64)',
        decode: '解码 (Base64 → 文本)',
      },
      
      urlEncoder: {
        title: 'URL 编码/解码',
        desc: '编码或解码 URL 组件。',
        inputPlaceholder: '输入 URL 或文本...',
        outputPlaceholder: '结果将显示在这里...',
      },
      
      hash: {
        title: '哈希生成器',
        desc: '从文本生成 SHA-256 和 SHA-1 哈希值。',
        inputPlaceholder: '输入要哈希的文本...',
        outputPlaceholder: '哈希值将显示在这里...',
        sha256: 'SHA-256',
        sha1: 'SHA-1',
      },
      
      timestamp: {
        title: 'Unix 时间戳转换',
        desc: 'Unix 时间戳与日期互转。',
        inputPlaceholder: '输入时间戳...',
        current: '当前时间戳',
        toDate: '转日期',
        toTimestamp: '转时间戳',
      },
      
      diff: {
        title: '文本对比工具',
        desc: '对比两个文本并高亮差异。',
        input1Label: '原始文本',
        input2Label: '修改后文本',
        input1Placeholder: '在此粘贴原始文本...',
        input2Placeholder: '在此粘贴修改后文本...',
      },
      
      xmlFormatter: {
        title: 'XML 格式化',
        desc: '格式化和美化 XML 文档。',
        comingSoon: '此工具正在开发中。',
      },
      
      regex: {
        title: '正则表达式测试器',
        desc: '实时测试正则表达式并高亮匹配结果。',
      },
      
      color: {
        title: '颜色转换器',
        desc: '在 HEX、RGB、HSL、RGBA 等格式间转换颜色。',
      },
      
      unit: {
        title: '单位转换器',
        desc: '转换长度、重量、温度、数据、时间等单位。',
      },
      
      markdown: {
        title: 'Markdown 编辑器',
        desc: '实时编写和预览 Markdown 文档。',
      },
      
      jwt: {
        title: 'JWT 解析器',
        desc: '解析 JSON Web Token，查看 Header、Payload 和 Signature。',
        inputLabel: 'JWT Token',
        inputPlaceholder: '粘贴您的 JWT token...',
        headerLabel: 'Header (已解析)',
        headerPlaceholder: 'JWT header 将显示在这里...',
        payloadLabel: 'Payload (已解析)',
        payloadPlaceholder: 'JWT payload 将显示在这里...',
        signatureLabel: 'Signature (base64)',
        signaturePlaceholder: 'JWT signature...',
        decode: '解析 JWT',
      },
      
      uuid: {
        title: 'UUID 生成器',
        desc: '生成随机 UUID v4 标识符。',
        countLabel: '数量',
        generate: '生成 UUID',
        copyAll: '复制全部',
        outputLabel: '生成的 UUID',
        outputPlaceholder: '生成的 UUID 将显示在这里...',
      },
      
      cron: {
        title: 'Cron 解析器',
        desc: '解析 Cron 表达式并显示人类可读的描述。',
        inputLabel: 'Cron 表达式',
        inputPlaceholder: '例如：0 9 * * 1-5',
        presetsLabel: '预设',
        everyHour: '每小时',
        everyDay: '每天',
        everyWeek: '每周',
        everyMonth: '每月',
        every5min: '每5分钟',
        parse: '解析',
        resultLabel: '人类可读描述',
        fieldMinute: '分钟',
        fieldHour: '小时',
        fieldDay: '日',
        fieldMonth: '月',
        fieldWeekday: '周几',
      },
      
      qrcode: {
        title: '二维码生成器',
        desc: '从文本或 URL 生成二维码。',
        inputLabel: '内容',
        inputPlaceholder: '输入文本或 URL...',
        sizeLabel: '大小',
        colorLabel: '颜色',
        generate: '生成',
        download: '下载',
        placeholder: '二维码将显示在这里',
      },
    },
    
    footer: {
      privacy: '🔒 100% 浏览器端处理 — 您的数据不会离开电脑',
    },
    
    seo: {
      home: { title: 'JSON 格式化与验证 - 免费在线 JSON 工具', description: '免费在线 JSON 格式化、验证和美化工具。即时格式化、压缩和验证 JSON 数据。无需注册，100% 浏览器端处理。', keywords: 'json 格式化, json 验证, json 美化, 在线 json 工具' },
      json: { title: 'JSON 格式化 - 格式化、验证和美化 JSON', description: '免费在线 JSON 格式化。格式化、验证、压缩和美化 JSON 数据。即时处理，无需注册。', keywords: 'json 格式化, json 验证, json 美化, json 压缩' },
      xml: { title: 'XML 格式化 - 格式化和美化 XML 文档', description: '免费在线 XML 格式化。即时格式化和美化 XML 文档。浏览器端处理。', keywords: 'xml 格式化, xml 美化, xml 验证, 在线 xml 工具' },
      base64: { title: 'Base64 编码/解码 - 在线 Base64 工具', description: '免费在线 Base64 编码和解码。即时将文本编码为 Base64 或将 Base64 解码为文本。', keywords: 'base64 编码, base64 解码, base64 在线, 编码解码' },
      url: { title: 'URL 编码/解码 - 编码 URL 组件', description: '免费在线 URL 编码和解码。编码或解码 URL 组件和查询字符串。', keywords: 'url 编码, url 解码, 编码 url, url 编码' },
      hash: { title: '哈希生成器 - SHA-256 和 SHA-1 哈希工具', description: '免费在线哈希生成器。即时从文本生成 SHA-256 和 SHA-1 哈希值。', keywords: '哈希生成器, sha256, sha-1, 哈希在线' },
      timestamp: { title: 'Unix 时间戳转换 - 日期转时间戳', description: '免费在线 Unix 时间戳转换。将时间戳转换为日期，反之亦然。', keywords: '时间戳转换, unix 时间戳, epoch 转换' },
      diff: { title: '文本对比工具 - 对比两个文本', description: '免费在线对比工具。对比两个文本并并排高亮差异。', keywords: '对比工具, 文本比较, 对比文本, 在线对比' },
      regex: { title: '正则测试器 - 测试正则表达式', description: '免费在线正则测试器。实时匹配和高亮测试正则表达式。', keywords: '正则测试器, 正则表达式, 正则在线, 测试正则' },
      color: { title: '颜色转换 - HEX RGB HSL 转换', description: '免费在线颜色转换器。在 HEX、RGB、HSL、RGBA 格式之间转换颜色。', keywords: '颜色转换, hex 转 rgb, rgb 转 hex, 颜色工具' },
      unit: { title: '单位转换 - 长度重量温度', description: '免费在线单位转换器。转换长度、重量、温度、数据、时间单位。', keywords: '单位转换, 转换单位, 长度转换, 重量转换' },
      markdown: { title: 'Markdown 编辑器 - 编写和预览 Markdown', description: '免费在线 Markdown 编辑器。实时编写和预览 Markdown，支持语法高亮。', keywords: 'markdown 编辑器, markdown 预览, md 编辑器, 在线 markdown' },
      jwt: { title: 'JWT 解析 - 解析 JSON Web Token', description: '免费在线 JWT 解析器。解析 JSON Web Token 并查看 header、payload、signature。', keywords: 'jwt 解析, jwt token, 解析 jwt, jwt 在线' },
      uuid: { title: 'UUID 生成器 - 生成 UUID v4', description: '免费在线 UUID 生成器。即时生成随机 UUID v4 标识符。', keywords: 'uuid 生成器, uuid v4, 生成 uuid, guid 生成器' },
      cron: { title: 'Cron 解析器 - 解析 Cron 表达式', description: '免费在线 Cron 解析器。解析 Cron 表达式并获取人类可读描述。', keywords: 'cron 解析器, cron 表达式, cron 计划, crontab' },
      qrcode: { title: '二维码生成器 - 生成二维码', description: '免费在线二维码生成器。即时从文本或 URL 生成二维码。', keywords: '二维码生成器, 生成二维码, 二维码在线, 二维码' },
      privacy: { title: '隐私政策 - JSON 工具', description: '了解 JSON 工具如何处理您的数据。100% 浏览器端处理，无数据收集，无追踪 Cookie。', keywords: '隐私政策, 数据保护, 浏览器端处理' },
      about: { title: '关于 JSON 工具 - 免费在线开发者工具', description: 'JSON 工具提供 15+ 免费在线开发者工具。隐私优先，即时结果，多语言支持。', keywords: '关于 json 工具, 免费开发者工具, 在线工具' },
      terms: { title: '服务条款 - JSON 工具', description: 'JSON 工具的服务条款。免费在线开发者工具，浏览器端处理。', keywords: '服务条款, 使用条款, 法律' },
    },
    
    pages: {
      privacy: {
        title: '隐私政策',
        lastUpdated: '最后更新：2026年6月24日',
        intro: '在 JSON 工具，我们非常重视您的隐私。本政策说明了当您使用 tools.nextapi.pro 时我们如何处理您的数据。',
        dataCollection: { title: '数据收集', content: '我们不收集、存储或传输任何个人数据。所有数据处理完全在您的浏览器中使用 JavaScript 完成。您的数据永远不会离开您的设备。' },
        cookies: { title: 'Cookie 和本地存储', content: '我们使用 localStorage 保存您的语言偏好和暗色模式设置。我们不使用追踪 Cookie。Google AdSense 可能使用 Cookie 来展示相关广告。' },
        thirdParty: { title: '第三方服务', content: '我们使用 Google AdSense 展示广告。Google 可能通过广告 Cookie 收集匿名使用数据。' },
        security: { title: '安全', content: '由于所有处理都在您的浏览器中进行，您的数据与您的设备一样安全。我们使用 HTTPS 加密所有通信。' },
        changes: { title: '政策变更', content: '我们可能会不时更新本隐私政策。任何变更将在此页面上发布并更新日期。' },
        contact: { title: '联系方式', content: '如果您对本隐私政策有疑问，请通过 privacy@nextapi.pro 联系我们。' }
      },
      about: {
        title: '关于 JSON 工具',
        mission: { title: '我们的使命', content: 'JSON 工具提供免费、高质量的开发者工具，同时尊重您的隐私。' },
        whatWeDo: { title: '我们做什么', content: '我们提供 15+ 在线开发者工具，包括 JSON/XML 格式化、Base64 编码、URL 编码、哈希生成、时间戳转换、文本对比、正则测试等。' },
        features: { title: '为什么选择 JSON 工具？', items: ['🔒 100% 浏览器端处理', '⚡ 即时结果', '🌍 多语言支持', '🌙 暗色模式', '📱 移动友好', '🆓 完全免费'] },
        openSource: { title: '开源', content: 'JSON 工具使用现代 Web 技术构建，托管在 Cloudflare 上。' },
        contact: { title: '联系方式', content: '有建议或发现 bug？请通过 contact@nextapi.pro 联系我们。' }
      },
      terms: {
        title: '服务条款',
        lastUpdated: '最后更新：2026年6月24日',
        acceptance: '访问和使用 JSON 工具即表示您同意受这些条款约束。',
        use: { title: '服务使用', content: 'JSON 工具提供免费在线开发者工具。所有处理都在您的浏览器中进行。' },
        ip: { title: '知识产权', content: 'JSON 工具的内容、设计和代码受版权保护。未经许可，您不得复制、修改或重新分发我们的源代码。' },
        disclaimer: { title: '免责声明', content: 'JSON 工具按"原样"提供，不附带任何形式的保证。' },
        changes: { title: '条款变更', content: '我们保留随时修改这些条款的权利。' },
        governing: { title: '适用法律', content: '这些条款应受适用法律管辖并据其解释。' }
      }
    },
  },
  
  es: {
    siteName: 'Herramientas JSON',
    siteDesc: 'Formateador, validador y embellecedor JSON gratuito en línea',
    
    nav: {
      format: 'Formato',
      encode: 'Codificar',
      dev: 'Dev',
      convert: 'Convertir',
      generate: 'Generar',
      jsonFormatter: 'Formateador JSON',
      xmlFormatter: 'Formateador XML',
      base64: 'Base64',
      urlEncoder: 'Codificador URL',
      hash: 'Hash',
      timestamp: 'Marca de tiempo',
      diff: 'Diferencias',
      regex: 'Probador Regex',
      color: 'Convertidor Color',
      unit: 'Convertidor Unidades',
      markdown: 'Editor Markdown',
      jwt: 'Decodificador JWT',
      uuid: 'Generador UUID',
      cron: 'Analizador Cron',
      qrcode: 'Código QR',
    },
    
    common: {
      input: 'Entrada',
      output: 'Salida',
      copy: 'Copiar',
      copied: '¡Copiado!',
      clear: 'Limpiar',
      process: 'Procesar',
      format: 'Formatear',
      minify: 'Minificar',
      encode: 'Codificar',
      decode: 'Decodificar',
      error: 'Error',
      invalidXml: 'XML inválido',
      invalidJwt: 'Formato JWT inválido',
    },
    
    tools: {
      jsonFormatter: {
        title: 'Formateador y Validador JSON',
        desc: 'Formatea, valida y minifica datos JSON. Gratis, rápido y seguro.',
        inputPlaceholder: 'Pega tu JSON aquí...',
        outputPlaceholder: 'El JSON formateado aparecerá aquí...',
        inputLabel: 'JSON de Entrada',
        outputLabel: 'Salida',
      },
      
      base64: {
        title: 'Codificador/Decodificador Base64',
        desc: 'Codifica o decodifica cadenas Base64.',
        inputPlaceholder: 'Ingresa texto o cadena Base64...',
        outputPlaceholder: 'El resultado aparecerá aquí...',
        encode: 'Codificar (Texto → Base64)',
        decode: 'Decodificar (Base64 → Texto)',
      },
      
      urlEncoder: {
        title: 'Codificador/Decodificador URL',
        desc: 'Codifica o decodifica componentes URL.',
        inputPlaceholder: 'Ingresa URL o texto...',
        outputPlaceholder: 'El resultado aparecerá aquí...',
      },
      
      hash: {
        title: 'Generador de Hash',
        desc: 'Genera hashes SHA-256 y SHA-1 a partir de texto.',
        inputPlaceholder: 'Ingresa texto para hashear...',
        outputPlaceholder: 'El hash aparecerá aquí...',
        sha256: 'SHA-256',
        sha1: 'SHA-1',
      },
      
      timestamp: {
        title: 'Convertidor de Timestamp Unix',
        desc: 'Convierte timestamps Unix a fechas y viceversa.',
        inputPlaceholder: 'Ingresa timestamp...',
        current: 'Timestamp actual',
        toDate: 'A Fecha',
        toTimestamp: 'A Timestamp',
      },
      
      diff: {
        title: 'Herramienta de Diff',
        desc: 'Compara dos textos y resalta diferencias.',
        input1Label: 'Texto Original',
        input2Label: 'Texto Modificado',
        input1Placeholder: 'Pega el texto original aquí...',
        input2Placeholder: 'Pega el texto modificado aquí...',
      },
      
      xmlFormatter: {
        title: 'Formateador XML',
        desc: 'Formatea y embellece documentos XML.',
        comingSoon: 'Esta herramienta está en desarrollo.',
      },
      
      regex: {
        title: 'Probador de Regex',
        desc: 'Prueba expresiones regulares con coincidencias en vivo.',
      },
      
      color: {
        title: 'Convertidor de Color',
        desc: 'Convierte colores entre formatos HEX, RGB, HSL, RGBA.',
      },
      
      unit: {
        title: 'Convertidor de Unidades',
        desc: 'Convierte unidades de longitud, peso, temperatura, datos, tiempo.',
      },
      
      markdown: {
        title: 'Editor Markdown',
        desc: 'Escribe y previsualiza Markdown en tiempo real.',
      },
      
      jwt: {
        title: 'Decodificador JWT',
        desc: 'Decodifica JSON Web Tokens y muestra header, payload y signature.',
        inputLabel: 'Token JWT',
        inputPlaceholder: 'Pega tu token JWT aquí...',
        headerLabel: 'Header (decodificado)',
        headerPlaceholder: 'El header JWT aparecerá aquí...',
        payloadLabel: 'Payload (decodificado)',
        payloadPlaceholder: 'El payload JWT aparecerá aquí...',
        signatureLabel: 'Signature (base64)',
        signaturePlaceholder: 'JWT signature...',
        decode: 'Decodificar JWT',
      },
      
      uuid: {
        title: 'Generador UUID',
        desc: 'Genera identificadores UUID v4 aleatorios.',
        countLabel: 'Cantidad',
        generate: 'Generar UUIDs',
        copyAll: 'Copiar Todos',
        outputLabel: 'UUIDs Generados',
        outputPlaceholder: 'Los UUIDs generados aparecerán aquí...',
      },
      
      cron: {
        title: 'Analizador Cron',
        desc: 'Analiza expresiones cron y muestra descripciones legibles.',
        inputLabel: 'Expresión Cron',
        inputPlaceholder: 'ej., 0 9 * * 1-5',
        presetsLabel: 'Preajustes',
        everyHour: 'Cada Hora',
        everyDay: 'Cada Día',
        everyWeek: 'Cada Semana',
        everyMonth: 'Cada Mes',
        every5min: 'Cada 5 Min',
        parse: 'Analizar',
        resultLabel: 'Descripción Legible',
        fieldMinute: 'Minuto',
        fieldHour: 'Hora',
        fieldDay: 'Día',
        fieldMonth: 'Mes',
        fieldWeekday: 'Día de Semana',
      },
      
      qrcode: {
        title: 'Generador de QR',
        desc: 'Genera código QR desde texto o URLs.',
        inputLabel: 'Contenido',
        inputPlaceholder: 'Ingresa texto o URL...',
        sizeLabel: 'Tamaño',
        colorLabel: 'Color',
        generate: 'Generar',
        download: 'Descargar',
        placeholder: 'QR aparecerá aquí',
enterText: 'Ingrese texto o URL',
        generateFirst: 'Genere código QR primero',
      },
    },
    
    footer: {
      privacy: '🔒 100% procesamiento del lado del navegador — tus datos nunca abandonan tu computadora',
    },
    
    seo: {
      home: { title: 'Formateador y Validador JSON - Herramienta JSON en Línea Gratuita', description: 'Formateador, validador y embellecedor JSON en línea gratuito. Formatea, minifica y valida datos JSON al instante. Sin registro, 100% procesamiento en el navegador.', keywords: 'formateador json, validador json, embellecedor json, herramienta json en línea' },
      json: { title: 'Formateador JSON - Formatear, Validar y Embellecer JSON', description: 'Formateador JSON en línea gratuito. Formatea, valida, minifica y embellece datos JSON. Procesamiento instantáneo, sin registro requerido.', keywords: 'formateador json, validador json, embellecedor json, json minificar' },
      xml: { title: 'Formateador XML - Formatear y Embellecer Documentos XML', description: 'Formateador XML en línea gratuito. Formatea y embellece documentos XML al instante. Procesamiento en el navegador.', keywords: 'formateador xml, embellecedor xml, validador xml, herramienta xml en línea' },
      base64: { title: 'Codificador/Decodificador Base64 - Herramienta Base64 en Línea', description: 'Codificador y decodificador Base64 en línea gratuito. Codifica texto a Base64 o decodifica Base64 a texto al instante.', keywords: 'codificador base64, decodificador base64, base64 en línea, codificar decodificar' },
      url: { title: 'Codificador/Decodificador URL - Codificar Componentes URL', description: 'Codificador y decodificador URL en línea gratuito. Codifica o decodifica componentes URL y cadenas de consulta.', keywords: 'codificador url, decodificador url, codificar url, codificación url' },
      hash: { title: 'Generador de Hash - Herramienta de Hash SHA-256 y SHA-1', description: 'Generador de hash en línea gratuito. Genera hashes SHA-256 y SHA-1 a partir de texto al instante.', keywords: 'generador hash, sha256, sha-1, hash en línea' },
      timestamp: { title: 'Convertidor de Timestamp Unix - Fecha a Timestamp', description: 'Convertidor de timestamp Unix en línea gratuito. Convierte timestamps a fechas y viceversa.', keywords: 'convertidor timestamp, unix timestamp, convertidor epoch' },
      diff: { title: 'Herramienta de Diff de Texto - Comparar Dos Textos', description: 'Herramienta diff en línea gratuita. Compara dos textos y resalta diferencias lado a lado.', keywords: 'herramienta diff, comparar texto, comparar textos, diff en línea' },
      regex: { title: 'Probador de Regex - Probar Expresiones Regulares', description: 'Probador de regex en línea gratuito. Prueba expresiones regulares con coincidencias en vivo y resaltado.', keywords: 'probador regex, expresión regular, regex en línea, probar regex' },
      color: { title: 'Convertidor de Color - Conversión HEX RGB HSL', description: 'Convertidor de color en línea gratuito. Convierte colores entre formatos HEX, RGB, HSL, RGBA.', keywords: 'convertidor color, hex a rgb, rgb a hex, herramienta color' },
      unit: { title: 'Convertidor de Unidades - Longitud Peso Temperatura', description: 'Convertidor de unidades en línea gratuito. Convierte unidades de longitud, peso, temperatura, datos, tiempo.', keywords: 'convertidor unidades, convertir unidades, convertidor longitud, convertidor peso' },
      markdown: { title: 'Editor Markdown - Escribir y Previsualizar Markdown', description: 'Editor Markdown en línea gratuito. Escribe y previsualiza Markdown en tiempo real con resaltado de sintaxis.', keywords: 'editor markdown, previsualización markdown, editor md, markdown en línea' },
      jwt: { title: 'Decodificador JWT - Decodificar JSON Web Tokens', description: 'Decodificador JWT en línea gratuito. Decodifica JSON Web Tokens y ve cabecera, payload, firma.', keywords: 'decodificador jwt, jwt token, decodificar jwt, jwt en línea' },
      uuid: { title: 'Generador UUID - Generar UUID v4', description: 'Generador UUID en línea gratuito. Genera identificadores UUID v4 aleatorios al instante.', keywords: 'generador uuid, uuid v4, generar uuid, generador guid' },
      cron: { title: 'Analizador Cron - Analizar Expresiones Cron', description: 'Analizador Cron en línea gratuito. Analiza expresiones cron y obtén descripciones legibles.', keywords: 'analizador cron, expresión cron, programación cron, crontab' },
      qrcode: { title: 'Generador de Código QR - Generar Códigos QR', description: 'Generador de código QR en línea gratuito. Genera códigos QR a partir de texto o URLs al instante.', keywords: 'generador código qr, generar qr, qr en línea, código qr' },
      privacy: { title: 'Política de Privacidad - JSON Tools', description: 'Aprende cómo JSON Tools maneja tus datos. 100% procesamiento en el navegador, sin recopilación de datos, sin cookies de seguimiento.', keywords: 'política privacidad, protección datos, procesamiento navegador' },
      about: { title: 'Acerca de JSON Tools - Utilidades de Desarrollador en Línea Gratuitas', description: 'JSON Tools proporciona más de 15 utilidades de desarrollador en línea gratuitas. Privacidad primero, resultados instantáneos, soporte multilingüe.', keywords: 'acerca json tools, herramientas desarrollador gratuitas, utilidades en línea' },
      terms: { title: 'Términos de Servicio - JSON Tools', description: 'Términos de servicio para JSON Tools. Utilidades de desarrollador en línea gratuitas con procesamiento en el navegador.', keywords: 'términos servicio, términos uso, legal' },
    },
    
    pages: {
      privacy: {
        title: 'Política de Privacidad',
        lastUpdated: 'Última actualización: 24 de junio de 2026',
        intro: 'En JSON Tools, nos tomamos su privacidad en serio.',
        dataCollection: { title: 'Recopilación de Datos', content: 'No recopilamos, almacenamos ni transmitimos ningún dato personal. Todo el procesamiento ocurre en su navegador.' },
        cookies: { title: 'Cookies y Almacenamiento Local', content: 'Usamos localStorage para guardar preferencias. No usamos cookies de seguimiento.' },
        thirdParty: { title: 'Servicios de Terceros', content: 'Usamos Google AdSense para mostrar anuncios.' },
        security: { title: 'Seguridad', content: 'Todo el procesamiento ocurre en su navegador, sus datos son tan seguros como su dispositivo.' },
        changes: { title: 'Cambios', content: 'Podemos actualizar esta política en cualquier momento.' },
        contact: { title: 'Contacto', content: 'privacy@nextapi.pro' }
      },
      about: {
        title: 'Acerca de JSON Tools',
        mission: { title: 'Nuestra Misión', content: 'Proporcionamos utilidades de desarrollador gratuitas que respetan su privacidad.' },
        whatWeDo: { title: 'Qué Hacemos', content: 'Ofrecemos más de 15 herramientas en línea para desarrolladores.' },
        features: { title: 'Por Qué Elegirnos', items: ['🔒 100% procesamiento en navegador', '⚡ Resultados instantáneos', '🌍 Multilingüe', '🌙 Modo oscuro', '📱 Compatible con móviles', '🆓 Gratis'] },
        openSource: { title: 'Código Abierto', content: 'Construido con tecnologías web modernas.' },
        contact: { title: 'Contacto', content: 'contact@nextapi.pro' }
      },
      terms: {
        title: 'Términos de Servicio',
        lastUpdated: 'Última actualización: 24 de junio de 2026',
        acceptance: 'Al usar JSON Tools, acepta estos términos.',
        use: { title: 'Uso', content: 'Herramientas gratuitas para desarrolladores. Todo el procesamiento ocurre en su navegador.' },
        ip: { title: 'Propiedad Intelectual', content: 'El contenido y código están protegidos por derechos de autor.' },
        disclaimer: { title: 'Descargo', content: 'Proporcionado "tal cual" sin garantías.' },
        changes: { title: 'Cambios', content: 'Podemos modificar estos términos en cualquier momento.' },
        governing: { title: 'Ley Aplicable', content: 'Regidos por las leyes aplicables.' }
      }
    },
  },
  
  ja: {
    siteName: 'JSON ツール',
    siteDesc: '無料オンラインJSONフォーマッター、バリデーター、ビューティファイア',
    
    nav: {
      format: 'フォーマット',
      encode: 'エンコード',
      dev: '開発',
      convert: '変換',
      generate: '生成',
      jsonFormatter: 'JSON フォーマッター',
      xmlFormatter: 'XML フォーマッター',
      base64: 'Base64',
      urlEncoder: 'URL エンコーダー',
      hash: 'ハッシュ',
      timestamp: 'タイムスタンプ',
      diff: '差分',
      regex: '正規テスト',
      color: '色変換',
      unit: '単位変換',
      markdown: 'Markdown',
      jwt: 'JWT 解析',
      uuid: 'UUID 生成',
      cron: 'Cron 解析',
      qrcode: 'QR コード',
    },
    
    common: {
      input: '入力',
      output: '出力',
      copy: 'コピー',
      copied: 'コピーしました!',
      clear: 'クリア',
      process: '処理',
      format: 'フォーマット',
      minify: '圧縮',
      encode: 'エンコード',
      decode: 'デコード',
      error: 'エラー',
      invalidXml: '無効なXML',
      invalidJwt: '無効なJWT形式',
    },
    
    tools: {
      jsonFormatter: {
        title: 'JSON フォーマッターとバリデーター',
        desc: 'JSONデータをフォーマット、検証、圧縮。無料、高速、安全 — すべての処理はブラウザ内で。',
        inputPlaceholder: 'JSONをここに貼り付け...',
        outputPlaceholder: 'フォーマットされたJSONがここに表示されます...',
        inputLabel: 'JSON 入力',
        outputLabel: '出力',
      },
      
      base64: {
        title: 'Base64 エンコーダー/デコーダー',
        desc: 'Base64文字列をエンコードまたはデコード。高速、無料、ブラウザ側処理。',
        inputPlaceholder: 'テキストまたはBase64文字列を入力...',
        outputPlaceholder: '結果がここに表示されます...',
        encode: 'エンコード (テキスト → Base64)',
        decode: 'デコード (Base64 → テキスト)',
      },
      
      urlEncoder: {
        title: 'URL エンコーダー/デコーダー',
        desc: 'URLコンポーネントをエンコードまたはデコード。',
        inputPlaceholder: 'URLまたはテキストを入力...',
        outputPlaceholder: '結果がここに表示されます...',
      },
      
      hash: {
        title: 'ハッシュ生成器',
        desc: 'テキストからSHA-256とSHA-1ハッシュを生成。',
        inputPlaceholder: 'ハッシュするテキストを入力...',
        outputPlaceholder: 'ハッシュがここに表示されます...',
        sha256: 'SHA-256',
        sha1: 'SHA-1',
      },
      
      timestamp: {
        title: 'Unix タイムスタンプ変換',
        desc: 'Unixタイムスタンプと日付を相互変換。',
        inputPlaceholder: 'タイムスタンプを入力...',
        current: '現在のタイムスタンプ',
        toDate: '日付へ',
        toTimestamp: 'タイムスタンプへ',
      },
      
      diff: {
        title: 'テキスト差分ツール',
        desc: '2つのテキストを比較し、違いをハイライト。',
        input1Label: '元のテキスト',
        input2Label: '変更後のテキスト',
        input1Placeholder: '元のテキストをここに貼り付け...',
        input2Placeholder: '変更後のテキストをここに貼り付け...',
      },
      
      xmlFormatter: {
        title: 'XML フォーマッター',
        desc: 'XMLドキュメントをフォーマットして整形。',
        comingSoon: 'このツールは開発中です。',
      },
      
      regex: {
        title: '正規表現テスター',
        desc: '正規表現をライブマッチングでテスト。',
      },
      
      color: {
        title: '色変換',
        desc: 'HEX、RGB、HSL、RGBA形式間で色を変換。',
      },
      
      unit: {
        title: '単位変換',
        desc: '長さ、重量、温度、データ、時間の単位を変換。',
      },
      
      markdown: {
        title: 'Markdownエディター',
        desc: 'リアルタイムでMarkdownを書いてプレビュー。',
      },
      
      jwt: {
        title: 'JWT 解析',
        desc: 'JWTトークンをデコードし、Header、Payload、Signatureを表示。',
        inputLabel: 'JWT Token',
        inputPlaceholder: 'JWTトークンをここに貼り付け...',
        headerLabel: 'Header (デコード済)',
        headerPlaceholder: 'JWT headerがここに表示されます...',
        payloadLabel: 'Payload (デコード済)',
        payloadPlaceholder: 'JWT payloadがここに表示されます...',
        signatureLabel: 'Signature (base64)',
        signaturePlaceholder: 'JWT signature...',
        decode: 'JWTをデコード',
      },
      
      uuid: {
        title: 'UUID 生成',
        desc: 'ランダムなUUID v4を生成。',
        countLabel: '数',
        generate: 'UUIDを生成',
        copyAll: 'すべてコピー',
        outputLabel: '生成されたUUID',
        outputPlaceholder: '生成されたUUIDがここに表示されます...',
      },
      
      cron: {
        title: 'Cron 解析',
        desc: 'Cron式を解析し、人間が読める説明を表示。',
        inputLabel: 'Cron式',
        inputPlaceholder: '例：0 9 * * 1-5',
        presetsLabel: 'プリセット',
        everyHour: '毎時間',
        everyDay: '毎日',
        everyWeek: '毎週',
        everyMonth: '毎月',
        every5min: '5分ごと',
        parse: '解析',
        resultLabel: '人間が読める説明',
        fieldMinute: '分',
        fieldHour: '時間',
        fieldDay: '日',
        fieldMonth: '月',
        fieldWeekday: '曜日',
      },
      
      qrcode: {
        title: 'QR コード生成',
        desc: 'テキストやURLからQRコードを生成。',
        inputLabel: '内容',
        inputPlaceholder: 'テキストまたはURLを入力...',
        sizeLabel: 'サイズ',
        colorLabel: '色',
        generate: '生成',
        download: 'ダウンロード',
        placeholder: 'QRコードがここに表示されます',
enterText: 'テキストまたはURLを入力してください',
        generateFirst: '先にQRコードを生成してください',
      },
    },
    
    footer: {
      privacy: '🔒 100% ブラウザ側処理 — データはコンピュータから離れません',
    },
    
    seo: {
      home: { title: 'JSON フォーマッターとバリデーター - 無料オンライン JSON ツール', description: '無料オンライン JSON フォーマッター、バリデーター、ビューティファイア。JSONデータを即座にフォーマット、圧縮、検証。登録不要、100% ブラウザ側処理。', keywords: 'json フォーマッター, json バリデーター, json ビューティファイア, オンライン json ツール' },
      json: { title: 'JSON フォーマッター - フォーマット、検証、美化 JSON', description: '無料オンライン JSON フォーマッター。JSONデータをフォーマット、検証、圧縮、美化。即時処理、登録不要。', keywords: 'json フォーマッター, json バリデーター, json ビューティファイア, json 圧縮' },
      xml: { title: 'XML フォーマッター - XMLドキュメントのフォーマットと美化', description: '無料オンライン XML フォーマッター。XMLドキュメントを即座にフォーマットと美化。ブラウザ側処理。', keywords: 'xml フォーマッター, xml ビューティファイア, xml バリデーター, オンライン xml ツール' },
      base64: { title: 'Base64 エンコーダー/デコーダー - オンライン Base64 ツール', description: '無料オンライン Base64 エンコーダーとデコーダー。テキストを Base64 にエンコードまたは Base64 をテキストにデコード。', keywords: 'base64 エンコーダー, base64 デコーダー, base64 オンライン, エンコード デコード' },
      url: { title: 'URL エンコーダー/デコーダー - URL コンポーネントのエンコード', description: '無料オンライン URL エンコーダーとデコーダー。URL コンポーネントとクエリ文字列をエンコードまたはデコード。', keywords: 'url エンコーダー, url デコーダー, url エンコード, url エンコーディング' },
      hash: { title: 'ハッシュ生成器 - SHA-256 と SHA-1 ハッシュツール', description: '無料オンラインハッシュ生成器。テキストから SHA-256 と SHA-1 ハッシュを即座に生成。', keywords: 'ハッシュ生成器, sha256, sha-1, ハッシュオンライン' },
      timestamp: { title: 'Unix タイムスタンプ変換 - 日付からタイムスタンプ', description: '無料オンライン Unix タイムスタンプ変換。タイムスタンプを日付に変換、または逆変換。', keywords: 'タイムスタンプ変換, unix タイムスタンプ, epoch 変換' },
      diff: { title: 'テキスト差分ツール - 二つのテキストを比較', description: '無料オンライン差分ツール。二つのテキストを比較し、違いを横並びでハイライト。', keywords: '差分ツール, テキスト比較, テキスト比較, 差分オンライン' },
      regex: { title: '正規表現テスター - 正規表現をテスト', description: '無料オンライン正規表現テスター。ライブマッチングとハイライトで正規表現をテスト。', keywords: '正規表現テスター, 正規表現, 正規オンライン, 正規テスト' },
      color: { title: '色変換 - HEX RGB HSL 変換', description: '無料オンライン色変換器。HEX、RGB、HSL、RGBA 形式間で色を変換。', keywords: '色変換, hex から rgb, rgb から hex, 色ツール' },
      unit: { title: '単位変換 - 長さ重量温度', description: '無料オンライン単位変換器。長さ、重量、温度、データ、時間の単位を変換。', keywords: '単位変換, 単位変換, 長さ変換, 重量変換' },
      markdown: { title: 'Markdown エディター - Markdown を書いてプレビュー', description: '無料オンライン Markdown エディター。シンタックスハイライト付きでリアルタイムに Markdown を書いてプレビュー。', keywords: 'markdown エディター, markdown プレビュー, md エディター, オンライン markdown' },
      jwt: { title: 'JWT 解析 - JSON Web Token を解析', description: '無料オンライン JWT 解析器。JSON Web Token を解析し、ヘッダー、ペイロード、署名を表示。', keywords: 'jwt 解析, jwt token, jwt 解析, jwt オンライン' },
      uuid: { title: 'UUID 生成器 - UUID v4 を生成', description: '無料オンライン UUID 生成器。ランダムな UUID v4 識別子を即座に生成。', keywords: 'uuid 生成器, uuid v4, uuid 生成, guid 生成器' },
      cron: { title: 'Cron 解析器 - Cron 式を解析', description: '無料オンライン Cron 解析器。Cron 式を解析し、人間が読める説明を取得。', keywords: 'cron 解析器, cron 式, cron スケジュール, crontab' },
      qrcode: { title: 'QR コード生成器 - QR コードを生成', description: '無料オンライン QR コード生成器。テキストや URL から QR コードを即座に生成。', keywords: 'qr コード生成器, qr 生成, qr オンライン, qr コード' },
      privacy: { title: 'プライバシーポリシー - JSON Tools', description: 'JSON Tools がデータをどう処理するか学びましょう。100% ブラウザ側処理、データ収集なし、トラッキング Cookie なし。', keywords: 'プライバシーポリシー, データ保護, ブラウザ側処理' },
      about: { title: 'JSON Tools について - 無料オンライン開発者ユーティリティ', description: 'JSON Tools は 15 以上の無料オンライン開発者ユーティリティを提供。プライバシー優先、即時結果、多言語サポート。', keywords: 'json tools について, 無料開発者ツール, オンラインユーティリティ' },
      terms: { title: '利用規約 - JSON Tools', description: 'JSON Tools の利用規約。ブラウザ側処理の無料オンライン開発者ユーティリティ。', keywords: '利用規約, 使用規約, 法的' },
    },
    
    pages: {
      privacy: {
        title: 'プライバシーポリシー',
        lastUpdated: '最終更新：2026年6月24日',
        intro: 'JSON Toolsでは、プライバシーを重視しています。',
        dataCollection: { title: 'データ収集', content: '個人情報を収集、保存、送信することはありません。すべての処理はブラウザ内で行われます。' },
        cookies: { title: 'Cookieとローカルストレージ', content: 'localStorageを使用して設定を保存します。トラッキングCookieは使用しません。' },
        thirdParty: { title: 'サードパーティサービス', content: 'Google AdSenseを使用して広告を表示しています。' },
        security: { title: 'セキュリティ', content: 'すべての処理がブラウザ内で行われるため、データはデバイスと同等の安全性を持ちます。' },
        changes: { title: 'ポリシーの変更', content: 'このポリシーを随時更新する場合があります。' },
        contact: { title: 'お問い合わせ', content: 'privacy@nextapi.pro' }
      },
      about: {
        title: 'JSON Toolsについて',
        mission: { title: '私たちのミッション', content: 'プライバシーを尊重した無料の開発者ユーティリティを提供します。' },
        whatWeDo: { title: '提供するもの', content: '15以上のオンライン開発者ツールを提供しています。' },
        features: { title: '選ばれる理由', items: ['🔒 100% ブラウザ側処理', '⚡ 即座の結果', '🌍 多言語対応', '🌙 ダークモード', '📱 モバイル対応', '🆓 完全無料'] },
        openSource: { title: 'オープンソース', content: '最新のWeb技術で構築されています。' },
        contact: { title: 'お問い合わせ', content: 'contact@nextapi.pro' }
      },
      terms: {
        title: '利用規約',
        lastUpdated: '最終更新：2026年6月24日',
        acceptance: 'JSON Toolsを使用することにより、これらの規約に同意したことになります。',
        use: { title: 'サービスの利用', content: '無料のオンライン開発者ユーティリティを提供します。' },
        ip: { title: '知的財産', content: 'コンテンツとコードは著作権で保護されています。' },
        disclaimer: { title: '免責事項', content: '「現状のまま」提供され、いかなる保証もありません。' },
        changes: { title: '規約の変更', content: 'いつでもこれらの規約を変更する権利を留保します。' },
        governing: { title: '準拠法', content: '適用法に従って解釈されます。' }
      }
    },
  },
  
  // German (Deutsch)
  de: {
    siteName: 'JSON Tools',
    siteDesc: 'Kostenloser Online JSON-Formatierer, Validator und Verschönerer',
    
    nav: {
      format: 'Format',
      encode: 'Kodieren',
      dev: 'Dev',
      convert: 'Konvertieren',
      generate: 'Generieren',
      jsonFormatter: 'JSON Formatierer',
      xmlFormatter: 'XML Formatierer',
      base64: 'Base64',
      urlEncoder: 'URL Kodierer',
      hash: 'Hash',
      timestamp: 'Zeitstempel',
      diff: 'Diff',
      regex: 'Regex Tester',
      color: 'Farbkonverter',
      unit: 'Einheitenkonverter',
      markdown: 'Markdown Editor',
      jwt: 'JWT Dekoder',
      uuid: 'UUID Generator',
      cron: 'Cron Parser',
      qrcode: 'QR Code',
    },
    
    common: {
      input: 'Eingabe',
      output: 'Ausgabe',
      copy: 'Kopieren',
      copied: 'Kopiert!',
      clear: 'Löschen',
      process: 'Verarbeiten',
      format: 'Formatieren',
      minify: 'Minimieren',
      encode: 'Kodieren',
      decode: 'Dekodieren',
      error: 'Fehler',
      invalidXml: 'Ungültiges XML',
      invalidJwt: 'Ungültiges JWT-Format',
    },
    
    tools: {
      jsonFormatter: {
        title: 'JSON Formatierer und Validator',
        desc: 'Formatieren, validieren und minimieren Sie JSON-Daten. Kostenlos, schnell und sicher — alle Verarbeitung erfolgt in Ihrem Browser.',
        inputPlaceholder: 'JSON hier einfügen...',
        outputPlaceholder: 'Formatiertes JSON erscheint hier...',
        inputLabel: 'JSON Eingabe',
        outputLabel: 'Ausgabe',
      },
      
      base64: {
        title: 'Base64 Kodierer / Dekoder',
        desc: 'Kodieren oder dekodieren Sie Base64-Zeichenfolgen. Schnell, kostenlos, browserseitig.',
        inputPlaceholder: 'Text oder Base64-Zeichenfolge eingeben...',
        outputPlaceholder: 'Ergebnis erscheint hier...',
        encode: 'Kodieren (Text → Base64)',
        decode: 'Dekodieren (Base64 → Text)',
      },
      
      urlEncoder: {
        title: 'URL Kodierer / Dekoder',
        desc: 'Kodieren oder dekodieren Sie URL-Komponenten.',
        inputPlaceholder: 'URL oder Text eingeben...',
        outputPlaceholder: 'Ergebnis erscheint hier...',
      },
      
      hash: {
        title: 'Hash Generator',
        desc: 'Erzeugen Sie SHA-256 und SHA-1 Hashes aus Text.',
        inputPlaceholder: 'Text zum Hashen eingeben...',
        outputPlaceholder: 'Hash erscheint hier...',
        sha256: 'SHA-256',
        sha1: 'SHA-1',
      },
      
      timestamp: {
        title: 'Unix Zeitstempel Konverter',
        desc: 'Konvertieren Sie Unix-Zeitstempel in Datumsangaben und umgekehrt.',
        inputPlaceholder: 'Zeitstempel eingeben...',
        current: 'Aktueller Zeitstempel',
        toDate: 'Zu Datum',
        toTimestamp: 'Zu Zeitstempel',
      },
      
      diff: {
        title: 'Text Diff Werkzeug',
        desc: 'Vergleichen Sie zwei Texte und heben Sie Unterschiede hervor.',
        input1Label: 'Originaltext',
        input2Label: 'Geänderter Text',
        input1Placeholder: 'Originaltext hier einfügen...',
        input2Placeholder: 'Geänderten Text hier einfügen...',
      },
      
      xmlFormatter: {
        title: 'XML Formatierer',
        desc: 'Formatieren und verschönern Sie XML-Dokumente.',
        comingSoon: 'Dieses Tool ist in Entwicklung.',
      },
      
      regex: {
        title: 'Regex Tester',
        desc: 'Testen Sie reguläre Ausdrücke mit Live-Matching.',
      },
      
      color: {
        title: 'Farbkonverter',
        desc: 'Konvertieren Sie Farben zwischen HEX, RGB, HSL, RGBA Formaten.',
      },
      
      unit: {
        title: 'Einheitenkonverter',
        desc: 'Konvertieren Sie Längen-, Gewichts-, Temperatur-, Daten- und Zeiteinheiten.',
      },
      
      markdown: {
        title: 'Markdown Editor',
        desc: 'Schreiben und zeigen Sie Markdown in Echtzeit an.',
      },
      
      jwt: {
        title: 'JWT Dekoder',
        desc: 'Dekodieren Sie JSON Web Tokens und zeigen Sie Header, Payload und Signature an.',
        inputLabel: 'JWT Token',
        inputPlaceholder: 'JWT Token hier einfügen...',
        headerLabel: 'Header (dekodiert)',
        headerPlaceholder: 'JWT Header erscheint hier...',
        payloadLabel: 'Payload (dekodiert)',
        payloadPlaceholder: 'JWT Payload erscheint hier...',
        signatureLabel: 'Signature (base64)',
        signaturePlaceholder: 'JWT Signature...',
        decode: 'JWT Dekodieren',
      },
      
      uuid: {
        title: 'UUID Generator',
        desc: 'Generieren Sie zufällige UUID v4 Kennungen.',
        countLabel: 'Anzahl',
        generate: 'UUIDs Generieren',
        copyAll: 'Alle Kopieren',
        outputLabel: 'Generierte UUIDs',
        outputPlaceholder: 'Generierte UUIDs erscheinen hier...',
      },
      
      cron: {
        title: 'Cron Parser',
        desc: 'Analysieren Sie Cron-Ausdrücke und sehen Sie lesbare Beschreibungen.',
        inputLabel: 'Cron Ausdruck',
        inputPlaceholder: 'z.B., 0 9 * * 1-5',
        presetsLabel: 'Voreinstellungen',
        everyHour: 'Jede Stunde',
        everyDay: 'Jeden Tag',
        everyWeek: 'Jede Woche',
        everyMonth: 'Jeden Monat',
        every5min: 'Alle 5 Min',
        parse: 'Analysieren',
        resultLabel: 'Lesbare Beschreibung',
        fieldMinute: 'Minute',
        fieldHour: 'Stunde',
        fieldDay: 'Tag',
        fieldMonth: 'Monat',
        fieldWeekday: 'Wochentag',
      },
      
      qrcode: {
        title: 'QR Code Generator',
        desc: 'Generieren Sie QR-Codes aus Text oder URLs.',
        inputLabel: 'Inhalt',
        inputPlaceholder: 'Text oder URL zum Kodieren eingeben...',
        sizeLabel: 'Größe',
        colorLabel: 'Farbe',
        generate: 'Generieren',
        download: 'Herunterladen',
        placeholder: 'QR-Code erscheint hier',
enterText: 'Bitte Text oder URL eingeben',
        generateFirst: 'QR-Code zuerst generieren',
      },
    },
    
    footer: {
      privacy: '🔒 100% browserseitige Verarbeitung — Ihre Daten verlassen niemals Ihren Computer',
    },
    
    seo: {
      home: { title: 'JSON Formatierer und Validator - Kostenloses Online JSON Tool', description: 'Kostenloser Online JSON-Formatierer, Validator und Verschönerer. JSON-Daten sofort formatieren, minimieren und validieren. Keine Anmeldung, 100% browserseitige Verarbeitung.', keywords: 'json formatierer, json validator, json verschönerer, online json tool' },
      json: { title: 'JSON Formatierer - Formatieren, Validieren und Verschönern JSON', description: 'Kostenloser Online JSON-Formatierer. JSON-Daten formatieren, validieren, minimieren und verschönern. Sofortige Verarbeitung, keine Anmeldung erforderlich.', keywords: 'json formatierer, json validator, json verschönerer, json minimieren' },
      xml: { title: 'XML Formatierer - Formatieren und Verschönern XML Dokumente', description: 'Kostenloser Online XML-Formatierer. XML-Dokumente sofort formatieren und verschönern. Browserseitige Verarbeitung.', keywords: 'xml formatierer, xml verschönerer, xml validator, online xml tool' },
      base64: { title: 'Base64 Kodierer/Dekoder - Online Base64 Tool', description: 'Kostenloser Online Base64-Kodierer und Dekoder. Text sofort in Base64 kodieren oder Base64 in Text dekodieren.', keywords: 'base64 kodierer, base64 dekoder, base64 online, kodieren dekodieren' },
      url: { title: 'URL Kodierer/Dekoder - URL Komponenten kodieren', description: 'Kostenloser Online URL-Kodierer und Dekoder. URL-Komponenten und Abfragestrings kodieren oder dekodieren.', keywords: 'url kodierer, url dekoder, url kodieren, url kodierung' },
      hash: { title: 'Hash Generator - SHA-256 und SHA-1 Hash Tool', description: 'Kostenloser Online Hash-Generator. SHA-256 und SHA-1 Hashes aus Text sofort generieren.', keywords: 'hash generator, sha256, sha-1, hash online' },
      timestamp: { title: 'Unix Zeitstempel Konverter - Datum zu Zeitstempel', description: 'Kostenloser Online Unix-Zeitstempel-Konverter. Zeitstempel in Datumsangaben konvertieren und umgekehrt.', keywords: 'zeitstempel konverter, unix zeitstempel, epoch konverter' },
      diff: { title: 'Text Diff Werkzeug - Zwei Texte vergleichen', description: 'Kostenloses Online Diff-Werkzeug. Zwei Texte vergleichen und Unterschiede nebeneinander hervorheben.', keywords: 'diff werkzeug, text vergleichen, texte vergleichen, diff online' },
      regex: { title: 'Regex Tester - Reguläre Ausdrücke testen', description: 'Kostenloser Online Regex-Tester. Reguläre Ausdrücke mit Live-Matching und Hervorhebung testen.', keywords: 'regex tester, reguläre ausdrücke, regex online, regex testen' },
      color: { title: 'Farbkonverter - HEX RGB HSL Konvertierung', description: 'Kostenloser Online Farbkonverter. Farben zwischen HEX, RGB, HSL, RGBA Formaten konvertieren.', keywords: 'farbkonverter, hex zu rgb, rgb zu hex, farb tool' },
      unit: { title: 'Einheitenkonverter - Länge Gewicht Temperatur', description: 'Kostenloser Online Einheitenkonverter. Längen-, Gewichts-, Temperatur-, Daten- und Zeiteinheiten konvertieren.', keywords: 'einheitenkonverter, einheiten konvertieren, längenkonverter, gewichtskonverter' },
      markdown: { title: 'Markdown Editor - Markdown schreiben und anzeigen', description: 'Kostenloser Online Markdown-Editor. Markdown mit Syntaxhervorhebung in Echtzeit schreiben und anzeigen.', keywords: 'markdown editor, markdown preview, md editor, online markdown' },
      jwt: { title: 'JWT Dekoder - JSON Web Tokens dekodieren', description: 'Kostenloser Online JWT-Dekoder. JSON Web Tokens dekodieren und Header, Payload, Signature anzeigen.', keywords: 'jwt dekoder, jwt token, jwt dekodieren, jwt online' },
      uuid: { title: 'UUID Generator - UUID v4 generieren', description: 'Kostenloser Online UUID-Generator. Zufällige UUID v4 Kennungen sofort generieren.', keywords: 'uuid generator, uuid v4, uuid generieren, guid generator' },
      cron: { title: 'Cron Parser - Cron Ausdrücke analysieren', description: 'Kostenloser Online Cron-Parser. Cron-Ausdrücke analysieren und lesbare Beschreibungen erhalten.', keywords: 'cron parser, cron ausdruck, cron plan, crontab' },
      qrcode: { title: 'QR Code Generator - QR Codes generieren', description: 'Kostenloser Online QR-Code-Generator. QR-Codes aus Text oder URLs sofort generieren.', keywords: 'qr code generator, qr generieren, qr online, qr code' },
      privacy: { title: 'Datenschutzerklärung - JSON Tools', description: 'Erfahren Sie, wie JSON Tools Ihre Daten behandelt. 100% browserseitige Verarbeitung, keine Datenerhebung, keine Tracking-Cookies.', keywords: 'datenschutzerklärung, datenschutz, browserseitige verarbeitung' },
      about: { title: 'Über JSON Tools - Kostenlose Online Entwickler-Tools', description: 'JSON Tools bietet über 15 kostenlose Online-Entwickler-Tools. Privatsphäre-first, sofortige Ergebnisse, mehrsprachige Unterstützung.', keywords: 'über json tools, kostenlose entwickler tools, online tools' },
      terms: { title: 'Nutzungsbedingungen - JSON Tools', description: 'Nutzungsbedingungen für JSON Tools. Kostenlose Online-Entwickler-Tools mit browserseitiger Verarbeitung.', keywords: 'nutzungsbedingungen, verwendung, rechtlich' },
    },
    
    pages: {
      privacy: {
        title: 'Datenschutzerklärung',
        lastUpdated: 'Zuletzt aktualisiert: 24. Juni 2026',
        intro: 'Bei JSON Tools nehmen wir Ihre Privatsphäre ernst. Diese Richtlinie erklärt, wie wir mit Ihren Daten umgehen, wenn Sie unsere Website unter tools.nextapi.pro nutzen.',
        dataCollection: { title: 'Datenerhebung', content: 'Wir erheben, speichern oder übertragen keine persönlichen Daten. Die gesamte Datenverarbeitung (JSON-Formatierung, Base64-Kodierung, Hashing usw.) erfolgt vollständig in Ihrem Browser mit JavaScript. Ihre Daten verlassen niemals Ihr Gerät.' },
        cookies: { title: 'Cookies & Lokaler Speicher', content: 'Wir verwenden localStorage, um Ihre Spracheinstellung und den Dunkelmodus zu speichern. Wir verwenden keine Tracking-Cookies. Google AdSense kann Cookies verwenden, um relevante Werbung zu schalten.' },
        thirdParty: { title: 'Drittanbieter-Dienste', content: 'Wir verwenden Google AdSense, um Werbung anzuzeigen. Google kann anonyme Nutzungsdaten über Werbe-Cookies sammeln.' },
        security: { title: 'Sicherheit', content: 'Da die gesamte Verarbeitung in Ihrem Browser erfolgt, sind Ihre Daten so sicher wie Ihr Gerät. Wir verwenden HTTPS, um die gesamte Kommunikation zu verschlüsseln.' },
        changes: { title: 'Änderungen an dieser Richtlinie', content: 'Wir können diese Datenschutzerklärung von Zeit zu Zeit aktualisieren. Alle Änderungen werden auf dieser Seite mit einem aktualisierten Datum veröffentlicht.' },
        contact: { title: 'Kontakt', content: 'Bei Fragen zu dieser Datenschutzerklärung kontaktieren Sie uns unter privacy@nextapi.pro.' }
      },
      about: {
        title: 'Über JSON Tools',
        mission: { title: 'Unsere Mission', content: 'JSON Tools bietet kostenlose, hochwertige Entwickler-Tools, die Ihre Privatsphäre respektieren. Wir glauben, dass leistungsstarke Tools für jeden zugänglich sein sollten, ohne die Datensicherheit zu gefährden.' },
        whatWeDo: { title: 'Was wir tun', content: 'Wir bieten über 15 Online-Tools für Entwickler an, einschließlich JSON/XML-Formatierung, Base64-Kodierung, URL-Kodierung, Hash-Generierung, Zeitstempelkonvertierung, Text-Diff, Regex-Test, Farbumwandlung, Einheitenkonvertierung, Markdown-Bearbeitung, JWT-Dekodierung, UUID-Generierung, Cron-Parsing und QR-Code-Generierung.' },
        features: { title: 'Warum JSON Tools wählen?', items: ['🔒 100% browserseitige Verarbeitung', '⚡ Sofortige Ergebnisse', '🌍 Mehrsprachige Unterstützung', '🌙 Dunkelmodus', '📱 Mobilfreundlich', '🆓 Komplett kostenlos'] },
        openSource: { title: 'Open Source', content: 'JSON Tools ist mit modernen Webtechnologien erstellt und auf Cloudflare gehostet.' },
        contact: { title: 'Kontakt', content: 'Haben Sie Vorschläge oder einen Fehler gefunden? Erreichen Sie uns unter contact@nextapi.pro.' }
      },
      terms: {
        title: 'Nutzungsbedingungen',
        lastUpdated: 'Zuletzt aktualisiert: 24. Juni 2026',
        acceptance: 'Durch den Zugriff und die Nutzung von JSON Tools (tools.nextapi.pro) stimmen Sie zu, an diese Bedingungen gebunden zu sein. Wenn Sie nicht einverstanden sind, nutzen Sie bitte unsere Dienste nicht.',
        use: { title: 'Nutzung des Dienstes', content: 'JSON Tools bietet kostenlose Online-Entwickler-Tools. Die gesamte Verarbeitung erfolgt in Ihrem Browser. Sie können diese Tools für persönliche oder kommerzielle Zwecke nutzen.' },
        ip: { title: 'Geistiges Eigentum', content: 'Der Inhalt, das Design und der Code von JSON Tools sind urheberrechtlich geschützt. Sie dürfen unseren Quellcode ohne Erlaubnis nicht kopieren, ändern oder weiterverteilen.' },
        disclaimer: { title: 'Haftungsausschluss', content: 'JSON Tools wird "wie besehen" ohne jegliche Garantie bereitgestellt. Wir übernehmen keine Gewähr für die Richtigkeit der Ergebnisse eines Tools.' },
        changes: { title: 'Änderungen der Bedingungen', content: 'Wir behalten uns das Recht vor, diese Bedingungen jederzeit zu ändern. Die fortgesetzte Nutzung des Dienstes nach Änderungen gilt als Annahme der neuen Bedingungen.' },
        governing: { title: 'Anwendbares Recht', content: 'Diese Bedingungen unterliegen den anwendbaren Gesetzen und sind gemäß diesen auszulegen.' }
      }
    },
  },
  
  // French (Français)
  fr: {
    siteName: 'JSON Tools',
    siteDesc: 'Formateur, validateur et embellisseur JSON gratuit en ligne',
    
    nav: {
      format: 'Format',
      encode: 'Encoder',
      dev: 'Dev',
      convert: 'Convertir',
      generate: 'Générer',
      jsonFormatter: 'Formateur JSON',
      xmlFormatter: 'Formateur XML',
      base64: 'Base64',
      urlEncoder: 'Encodeur URL',
      hash: 'Hash',
      timestamp: 'Horodatage',
      diff: 'Diff',
      regex: 'Testeur Regex',
      color: 'Convertisseur Couleur',
      unit: 'Convertisseur Unités',
      markdown: 'Éditeur Markdown',
      jwt: 'Décodeur JWT',
      uuid: 'Générateur UUID',
      cron: 'Analyseur Cron',
      qrcode: 'Code QR',
    },
    
    common: {
      input: 'Entrée',
      output: 'Sortie',
      copy: 'Copier',
      copied: 'Copié !',
      clear: 'Effacer',
      process: 'Traiter',
      format: 'Formater',
      minify: 'Minifier',
      encode: 'Encoder',
      decode: 'Décoder',
      error: 'Erreur',
      invalidXml: 'XML invalide',
      invalidJwt: 'Format JWT invalide',
    },
    
    tools: {
      jsonFormatter: {
        title: 'Formateur et Validateur JSON',
        desc: 'Formatez, validez et minifiez les données JSON. Gratuit, rapide et sécurisé — tout le traitement se fait dans votre navigateur.',
        inputPlaceholder: 'Collez votre JSON ici...',
        outputPlaceholder: 'Le JSON formaté apparaîtra ici...',
        inputLabel: 'JSON en entrée',
        outputLabel: 'Sortie',
      },
      
      base64: {
        title: 'Encodeur / Décodeur Base64',
        desc: 'Encodez ou décodez des chaînes Base64. Rapide, gratuit, côté navigateur.',
        inputPlaceholder: 'Entrez du texte ou une chaîne Base64...',
        outputPlaceholder: 'Le résultat apparaîtra ici...',
        encode: 'Encoder (Texte → Base64)',
        decode: 'Décoder (Base64 → Texte)',
      },
      
      urlEncoder: {
        title: 'Encodeur / Décodeur URL',
        desc: 'Encodez ou décodez des composants URL.',
        inputPlaceholder: 'Entrez une URL ou du texte...',
        outputPlaceholder: 'Le résultat apparaîtra ici...',
      },
      
      hash: {
        title: 'Générateur de Hash',
        desc: 'Générez des hash SHA-256 et SHA-1 à partir de texte.',
        inputPlaceholder: 'Entrez le texte à hasher...',
        outputPlaceholder: 'Le hash apparaîtra ici...',
        sha256: 'SHA-256',
        sha1: 'SHA-1',
      },
      
      timestamp: {
        title: 'Convertisseur d\'Horodatage Unix',
        desc: 'Convertissez les horodatages Unix en dates et vice versa.',
        inputPlaceholder: 'Entrez un horodatage...',
        current: 'Horodatage actuel',
        toDate: 'Vers Date',
        toTimestamp: 'Vers Horodatage',
      },
      
      diff: {
        title: 'Outil de Diff Textuel',
        desc: 'Comparez deux textes et mettez en évidence les différences.',
        input1Label: 'Texte Original',
        input2Label: 'Texte Modifié',
        input1Placeholder: 'Collez le texte original ici...',
        input2Placeholder: 'Collez le texte modifié ici...',
      },
      
      xmlFormatter: {
        title: 'Formateur XML',
        desc: 'Formatez et embellissez les documents XML.',
        comingSoon: 'Cet outil est en développement.',
      },
      
      regex: {
        title: 'Testeur Regex',
        desc: 'Testez les expressions régulières avec correspondance en direct.',
      },
      
      color: {
        title: 'Convertisseur de Couleur',
        desc: 'Convertissez les couleurs entre les formats HEX, RGB, HSL, RGBA.',
      },
      
      unit: {
        title: 'Convertisseur d\'Unités',
        desc: 'Convertissez des unités de longueur, poids, température, données, temps.',
      },
      
      markdown: {
        title: 'Éditeur Markdown',
        desc: 'Écrivez et prévisualisez Markdown en temps réel.',
      },
      
      jwt: {
        title: 'Décodeur JWT',
        desc: 'Décodez les JSON Web Tokens et affichez l\'en-tête, la charge utile et la signature.',
        inputLabel: 'Token JWT',
        inputPlaceholder: 'Collez votre token JWT ici...',
        headerLabel: 'En-tête (décodé)',
        headerPlaceholder: 'L\'en-tête JWT apparaîtra ici...',
        payloadLabel: 'Charge utile (décodée)',
        payloadPlaceholder: 'La charge utile JWT apparaîtra ici...',
        signatureLabel: 'Signature (base64)',
        signaturePlaceholder: 'Signature JWT...',
        decode: 'Décoder JWT',
      },
      
      uuid: {
        title: 'Générateur UUID',
        desc: 'Générez des identifiants UUID v4 aléatoires.',
        countLabel: 'Nombre',
        generate: 'Générer des UUID',
        copyAll: 'Copier Tout',
        outputLabel: 'UUID Générés',
        outputPlaceholder: 'Les UUID générés apparaîtront ici...',
      },
      
      cron: {
        title: 'Analyseur Cron',
        desc: 'Analysez les expressions cron et voyez des descriptions lisibles.',
        inputLabel: 'Expression Cron',
        inputPlaceholder: 'ex., 0 9 * * 1-5',
        presetsLabel: 'Préréglages',
        everyHour: 'Chaque Heure',
        everyDay: 'Chaque Jour',
        everyWeek: 'Chaque Semaine',
        everyMonth: 'Chaque Mois',
        every5min: 'Toutes les 5 Min',
        parse: 'Analyser',
        resultLabel: 'Description Lisible',
        fieldMinute: 'Minute',
        fieldHour: 'Heure',
        fieldDay: 'Jour',
        fieldMonth: 'Mois',
        fieldWeekday: 'Jour de Semaine',
      },
      
      qrcode: {
        title: 'Générateur de Code QR',
        desc: 'Générez des codes QR à partir de texte ou d\'URLs.',
        inputLabel: 'Contenu',
        inputPlaceholder: 'Entrez du texte ou une URL à encoder...',
        sizeLabel: 'Taille',
        colorLabel: 'Couleur',
        generate: 'Générer',
        download: 'Télécharger',
        placeholder: 'Le code QR apparaîtra ici',
enterText: 'Veuillez entrer du texte ou une URL',
        generateFirst: 'Générez d\'abord le code QR',
      },
    },
    
    footer: {
      privacy: '🔒 100% de traitement côté navigateur — vos données ne quittent jamais votre ordinateur',
    },
    
    seo: {
      home: { title: 'Formateur et Validateur JSON - Outil JSON en Ligne Gratuit', description: 'Formateur, validateur et embellisseur JSON en ligne gratuit. Formatez, minifiez et validez les données JSON instantanément. Aucune inscription, 100% traitement côté navigateur.', keywords: 'formateur json, validateur json, embellisseur json, outil json en ligne' },
      json: { title: 'Formateur JSON - Formater, Valider et Embellir JSON', description: 'Formateur JSON en ligne gratuit. Formatez, validez, minifiez et embellissez les données JSON. Traitement instantané, aucune inscription requise.', keywords: 'formateur json, validateur json, embellisseur json, json minifier' },
      xml: { title: 'Formateur XML - Formater et Embellir Documents XML', description: 'Formateur XML en ligne gratuit. Formatez et embellissez les documents XML instantanément. Traitement côté navigateur.', keywords: 'formateur xml, embellisseur xml, validateur xml, outil xml en ligne' },
      base64: { title: 'Encodeur/Décodeur Base64 - Outil Base64 en Ligne', description: 'Encodeur et décodeur Base64 en ligne gratuit. Encodez du texte en Base64 ou décodez Base64 en texte instantanément.', keywords: 'encodeur base64, décodeur base64, base64 en ligne, encoder décoder' },
      url: { title: 'Encodeur/Décodeur URL - Encoder Composants URL', description: 'Encodeur et décodeur URL en ligne gratuit. Encodez ou décodez les composants URL et les chaînes de requête.', keywords: 'encodeur url, décodeur url, encoder url, encodage url' },
      hash: { title: 'Générateur de Hash - Outil Hash SHA-256 et SHA-1', description: 'Générateur de hash en ligne gratuit. Générez des hash SHA-256 et SHA-1 à partir de texte instantanément.', keywords: 'générateur hash, sha256, sha-1, hash en ligne' },
      timestamp: { title: 'Convertisseur Timestamp Unix - Date vers Timestamp', description: 'Convertisseur timestamp Unix en ligne gratuit. Convertissez des timestamps en dates et vice versa.', keywords: 'convertisseur timestamp, unix timestamp, convertisseur epoch' },
      diff: { title: 'Outil Diff Textuel - Comparer Deux Textes', description: 'Outil diff en ligne gratuit. Comparez deux textes et mettez en évidence les différences côte à côte.', keywords: 'outil diff, comparer texte, comparer textes, diff en ligne' },
      regex: { title: 'Testeur Regex - Tester Expressions Régulières', description: 'Testeur regex en ligne gratuit. Testez les expressions régulières avec correspondance en direct et mise en évidence.', keywords: 'testeur regex, expression régulière, regex en ligne, tester regex' },
      color: { title: 'Convertisseur Couleur - Conversion HEX RGB HSL', description: 'Convertisseur couleur en ligne gratuit. Convertissez les couleurs entre formats HEX, RGB, HSL, RGBA.', keywords: 'convertisseur couleur, hex vers rgb, rgb vers hex, outil couleur' },
      unit: { title: 'Convertisseur Unités - Longueur Poids Température', description: 'Convertisseur unités en ligne gratuit. Convertissez unités de longueur, poids, température, données, temps.', keywords: 'convertisseur unités, convertir unités, convertisseur longueur, convertisseur poids' },
      markdown: { title: 'Éditeur Markdown - Écrire et Prévisualiser Markdown', description: 'Éditeur Markdown en ligne gratuit. Écrivez et prévisualisez Markdown en temps réel avec coloration syntaxique.', keywords: 'éditeur markdown, prévisualisation markdown, éditeur md, markdown en ligne' },
      jwt: { title: 'Décodeur JWT - Décoder JSON Web Tokens', description: 'Décodeur JWT en ligne gratuit. Décodez JSON Web Tokens et affichez en-tête, payload, signature.', keywords: 'décodeur jwt, jwt token, décoder jwt, jwt en ligne' },
      uuid: { title: 'Générateur UUID - Générer UUID v4', description: 'Générateur UUID en ligne gratuit. Générez des identifiants UUID v4 aléatoires instantanément.', keywords: 'générateur uuid, uuid v4, générer uuid, générateur guid' },
      cron: { title: 'Analyseur Cron - Analyser Expressions Cron', description: 'Analyseur Cron en ligne gratuit. Analysez les expressions cron et obtenez des descriptions lisibles.', keywords: 'analyseur cron, expression cron, planification cron, crontab' },
      qrcode: { title: 'Générateur Code QR - Générer Codes QR', description: 'Générateur code QR en ligne gratuit. Générez des codes QR à partir de texte ou URLs instantanément.', keywords: 'générateur code qr, générer qr, qr en ligne, code qr' },
      privacy: { title: 'Politique de Confidentialité - JSON Tools', description: 'Découvrez comment JSON Tools traite vos données. 100% traitement côté navigateur, aucune collecte de données, aucun cookie de suivi.', keywords: 'politique confidentialité, protection données, traitement navigateur' },
      about: { title: 'À Propos de JSON Tools - Utilitaires Développeur en Ligne Gratuits', description: 'JSON Tools fournit plus de 15 utilitaires développeur en ligne gratuits. Confidentialité d\'abord, résultats instantanés, support multilingue.', keywords: 'à propos json tools, outils développeur gratuits, utilitaires en ligne' },
      terms: { title: 'Conditions d\'Utilisation - JSON Tools', description: 'Conditions d\'utilisation pour JSON Tools. Utilitaires développeur en ligne gratuits avec traitement côté navigateur.', keywords: 'conditions utilisation, termes utilisation, légal' },
    },
    
    pages: {
      privacy: {
        title: 'Politique de Confidentialité',
        lastUpdated: 'Dernière mise à jour : 24 juin 2026',
        intro: 'Chez JSON Tools, nous prenons votre vie privée au sérieux. Cette politique explique comment nous gérons vos données lorsque vous utilisez notre site web à tools.nextapi.pro.',
        dataCollection: { title: 'Collecte de Données', content: 'Nous ne collectons, stockons ni transmettons aucune donnée personnelle. Tout le traitement des données (formatage JSON, encodage Base64, hachage, etc.) se fait entièrement dans votre navigateur avec JavaScript. Vos données ne quittent jamais votre appareil.' },
        cookies: { title: 'Cookies & Stockage Local', content: 'Nous utilisons localStorage pour enregistrer vos préférences linguistiques et le mode sombre. Nous n\'utilisons pas de cookies de suivi. Google AdSense peut utiliser des cookies pour diffuser des publicités pertinentes.' },
        thirdParty: { title: 'Services Tiers', content: 'Nous utilisons Google AdSense pour afficher des publicités. Google peut collecter des données d\'utilisation anonymes via les cookies publicitaires.' },
        security: { title: 'Sécurité', content: 'Puisque tout le traitement se fait dans votre navigateur, vos données sont aussi sécurisées que votre appareil. Nous utilisons HTTPS pour chiffrer toutes les communications.' },
        changes: { title: 'Modifications de Cette Politique', content: 'Nous pouvons mettre à jour cette politique de confidentialité de temps à autre. Toute modification sera publiée sur cette page avec une date mise à jour.' },
        contact: { title: 'Contact', content: 'Si vous avez des questions sur cette politique de confidentialité, contactez-nous à privacy@nextapi.pro.' }
      },
      about: {
        title: 'À Propos de JSON Tools',
        mission: { title: 'Notre Mission', content: 'JSON Tools fournit des utilitaires de développement gratuits et de haute qualité qui respectent votre vie privée. Nous croyons que des outils puissants devraient être accessibles à tous sans sacrifier la sécurité des données.' },
        whatWeDo: { title: 'Ce Que Nous Faisons', content: 'Nous offrons plus de 15 outils en ligne pour les développeurs, notamment le formatage JSON/XML, l\'encodage Base64, l\'encodage URL, la génération de hash, la conversion d\'horodatage, le diff de texte, les tests regex, la conversion de couleurs, la conversion d\'unités, l\'édition Markdown, le décodage JWT, la génération UUID, l\'analyse cron et la génération de codes QR.' },
        features: { title: 'Pourquoi Choisir JSON Tools ?', items: ['🔒 100% traitement côté navigateur', '⚡ Résultats instantanés', '🌍 Support multilingue', '🌙 Mode sombre', '📱 Adapté aux mobiles', '🆓 Totalement gratuit'] },
        openSource: { title: 'Open Source', content: 'JSON Tools est construit avec des technologies web modernes et hébergé sur Cloudflare.' },
        contact: { title: 'Contact', content: 'Des suggestions ou un bug trouvé ? Contactez-nous à contact@nextapi.pro.' }
      },
      terms: {
        title: 'Conditions d\'Utilisation',
        lastUpdated: 'Dernière mise à jour : 24 juin 2026',
        acceptance: 'En accédant et en utilisant JSON Tools (tools.nextapi.pro), vous acceptez d\'être lié par ces conditions. Si vous n\'êtes pas d\'accord, veuillez ne pas utiliser nos services.',
        use: { title: 'Utilisation du Service', content: 'JSON Tools fournit des utilitaires de développement en ligne gratuits. Tout le traitement se fait dans votre navigateur. Vous pouvez utiliser ces outils à des fins personnelles ou commerciales.' },
        ip: { title: 'Propriété Intellectuelle', content: 'Le contenu, le design et le code de JSON Tools sont protégés par le droit d\'auteur. Vous ne pouvez pas copier, modifier ou redistribuer notre code source sans autorisation.' },
        disclaimer: { title: 'Avertissement', content: 'JSON Tools est fourni "tel quel" sans aucune garantie. Nous ne garantissons pas l\'exactitude des résultats de tout outil.' },
        changes: { title: 'Modifications des Conditions', content: 'Nous nous réservons le droit de modifier ces conditions à tout moment. L\'utilisation continue du service après les modifications constitue l\'acceptation des nouvelles conditions.' },
        governing: { title: 'Droit Applicable', content: 'Ces conditions seront régies et interprétées conformément aux lois applicables.' }
      }
    },
  },
  
  // Russian (Русский)
  ru: {
    siteName: 'JSON Tools',
    siteDesc: 'Бесплатный онлайн JSON форматтер, валидатор и beautifier',
    
    nav: {
      format: 'Формат',
      encode: 'Кодировать',
      dev: 'Dev',
      convert: 'Конвертировать',
      generate: 'Генерировать',
      jsonFormatter: 'JSON Форматтер',
      xmlFormatter: 'XML Форматтер',
      base64: 'Base64',
      urlEncoder: 'URL Кодировщик',
      hash: 'Хеш',
      timestamp: 'Временная метка',
      diff: 'Сравнение',
      regex: 'Тестер Regex',
      color: 'Конвертер цветов',
      unit: 'Конвертер единиц',
      markdown: 'Markdown Редактор',
      jwt: 'JWT Декодер',
      uuid: 'UUID Генератор',
      cron: 'Cron Парсер',
      qrcode: 'QR Код',
    },
    
    common: {
      input: 'Ввод',
      output: 'Вывод',
      copy: 'Копировать',
      copied: 'Скопировано!',
      clear: 'Очистить',
      process: 'Обработать',
      format: 'Форматировать',
      minify: 'Минифицировать',
      encode: 'Кодировать',
      decode: 'Декодировать',
      error: 'Ошибка',
      invalidXml: 'Неверный XML',
      invalidJwt: 'Неверный формат JWT',
    },
    
    tools: {
      jsonFormatter: {
        title: 'JSON Форматтер и Валидатор',
        desc: 'Форматируйте, проверяйте и минифицируйте JSON данные. Бесплатно, быстро и безопасно — вся обработка происходит в вашем браузере.',
        inputPlaceholder: 'Вставьте ваш JSON здесь...',
        outputPlaceholder: 'Отформатированный JSON появится здесь...',
        inputLabel: 'Входной JSON',
        outputLabel: 'Вывод',
      },
      
      base64: {
        title: 'Base64 Кодировщик / Декодер',
        desc: 'Кодируйте или декодируйте строки Base64. Быстро, бесплатно, в браузере.',
        inputPlaceholder: 'Введите текст или строку Base64...',
        outputPlaceholder: 'Результат появится здесь...',
        encode: 'Кодировать (Текст → Base64)',
        decode: 'Декодировать (Base64 → Текст)',
      },
      
      urlEncoder: {
        title: 'URL Кодировщик / Декодер',
        desc: 'Кодируйте или декодируйте компоненты URL.',
        inputPlaceholder: 'Введите URL или текст...',
        outputPlaceholder: 'Результат появится здесь...',
      },
      
      hash: {
        title: 'Генератор Хешей',
        desc: 'Генерируйте хеши SHA-256 и SHA-1 из текста.',
        inputPlaceholder: 'Введите текст для хеширования...',
        outputPlaceholder: 'Хеш появится здесь...',
        sha256: 'SHA-256',
        sha1: 'SHA-1',
      },
      
      timestamp: {
        title: 'Конвертер Unix Временных Меток',
        desc: 'Конвертируйте временные метки Unix в даты и обратно.',
        inputPlaceholder: 'Введите временную метку...',
        current: 'Текущая временная метка',
        toDate: 'В Дату',
        toTimestamp: 'В Временную Метку',
      },
      
      diff: {
        title: 'Инструмент Сравнения Текста',
        desc: 'Сравнивайте два текста и выделяйте различия.',
        input1Label: 'Оригинальный Текст',
        input2Label: 'Измененный Текст',
        input1Placeholder: 'Вставьте оригинальный текст здесь...',
        input2Placeholder: 'Вставьте измененный текст здесь...',
      },
      
      xmlFormatter: {
        title: 'XML Форматтер',
        desc: 'Форматируйте и украшайте XML документы.',
        comingSoon: 'Этот инструмент в разработке.',
      },
      
      regex: {
        title: 'Тестер Regex',
        desc: 'Тестируйте регулярные выражения с живым сопоставлением.',
      },
      
      color: {
        title: 'Конвертер Цветов',
        desc: 'Конвертируйте цвета между форматами HEX, RGB, HSL, RGBA.',
      },
      
      unit: {
        title: 'Конвертер Единиц',
        desc: 'Конвертируйте единицы длины, веса, температуры, данных, времени.',
      },
      
      markdown: {
        title: 'Markdown Редактор',
        desc: 'Пишите и просматривайте Markdown в реальном времени.',
      },
      
      jwt: {
        title: 'JWT Декодер',
        desc: 'Декодируйте JSON Web Tokens и просматривайте заголовок, полезную нагрузку и подпись.',
        inputLabel: 'JWT Token',
        inputPlaceholder: 'Вставьте ваш JWT токен здесь...',
        headerLabel: 'Заголовок (декодирован)',
        headerPlaceholder: 'JWT заголовок появится здесь...',
        payloadLabel: 'Полезная нагрузка (декодирована)',
        payloadPlaceholder: 'JWT полезная нагрузка появится здесь...',
        signatureLabel: 'Подпись (base64)',
        signaturePlaceholder: 'JWT подпись...',
        decode: 'Декодировать JWT',
      },
      
      uuid: {
        title: 'UUID Генератор',
        desc: 'Генерируйте случайные идентификаторы UUID v4.',
        countLabel: 'Количество',
        generate: 'Сгенерировать UUID',
        copyAll: 'Копировать Все',
        outputLabel: 'Сгенерированные UUID',
        outputPlaceholder: 'Сгенерированные UUID появятся здесь...',
      },
      
      cron: {
        title: 'Cron Парсер',
        desc: 'Анализируйте выражения cron и смотрите понятные описания.',
        inputLabel: 'Выражение Cron',
        inputPlaceholder: 'напр., 0 9 * * 1-5',
        presetsLabel: 'Предустановки',
        everyHour: 'Каждый Час',
        everyDay: 'Каждый День',
        everyWeek: 'Каждую Неделю',
        everyMonth: 'Каждый Месяц',
        every5min: 'Каждые 5 Мин',
        parse: 'Анализировать',
        resultLabel: 'Понятное Описание',
        fieldMinute: 'Минута',
        fieldHour: 'Час',
        fieldDay: 'День',
        fieldMonth: 'Месяц',
        fieldWeekday: 'День Недели',
      },
      
      qrcode: {
        title: 'Генератор QR Кодов',
        desc: 'Генерируйте QR коды из текста или URL.',
        inputLabel: 'Содержимое',
        inputPlaceholder: 'Введите текст или URL для кодирования...',
        sizeLabel: 'Размер',
        colorLabel: 'Цвет',
        generate: 'Сгенерировать',
        download: 'Скачать',
        placeholder: 'QR код появится здесь',
enterText: 'Введите текст или URL',
        generateFirst: 'Сначала сгенерируйте QR-код',
      },
    },
    
    footer: {
      privacy: '🔒 100% обработка в браузере — ваши данные никогда не покидают ваш компьютер',
    },
    
    seo: {
      home: { title: 'JSON Форматтер и Валидатор - Бесплатный Онлайн JSON Инструмент', description: 'Бесплатный онлайн JSON форматтер, валидатор и beautifier. Мгновенно форматируйте, минифицируйте и проверяйте JSON данные. Без регистрации, 100% обработка в браузере.', keywords: 'json форматтер, json валидатор, json beautifier, онлайн json инструмент' },
      json: { title: 'JSON Форматтер - Форматировать, Проверять и Beautify JSON', description: 'Бесплатный онлайн JSON форматтер. Форматируйте, проверяйте, минифицируйте и beautify JSON данные. Мгновенная обработка, без регистрации.', keywords: 'json форматтер, json валидатор, json beautifier, json минифицировать' },
      xml: { title: 'XML Форматтер - Форматировать и Beautify XML Документы', description: 'Бесплатный онлайн XML форматтер. Мгновенно форматируйте и beautify XML документы. Обработка в браузере.', keywords: 'xml форматтер, xml beautifier, xml валидатор, онлайн xml инструмент' },
      base64: { title: 'Base64 Кодировщик/Декодер - Онлайн Base64 Инструмент', description: 'Бесплатный онлайн Base64 кодировщик и декодер. Мгновенно кодируйте текст в Base64 или декодируйте Base64 в текст.', keywords: 'base64 кодировщик, base64 декодер, base64 онлайн, кодировать декодировать' },
      url: { title: 'URL Кодировщик/Декодер - Кодировать URL Компоненты', description: 'Бесплатный онлайн URL кодировщик и декодер. Кодируйте или декодируйте URL компоненты и строки запроса.', keywords: 'url кодировщик, url декодер, кодировать url, url кодирование' },
      hash: { title: 'Генератор Хешей - SHA-256 и SHA-1 Хеш Инструмент', description: 'Бесплатный онлайн генератор хешей. Мгновенно генерируйте SHA-256 и SHA-1 хеш из текста.', keywords: 'генератор хеш, sha256, sha-1, хеш онлайн' },
      timestamp: { title: 'Конвертер Unix Временных Меток - Дата в Временную Метку', description: 'Бесплатный онлайн конвертер Unix временных меток. Конвертируйте временные метки в даты и обратно.', keywords: 'конвертер временных меток, unix временная метка, epoch конвертер' },
      diff: { title: 'Инструмент Сравнения Текста - Сравнить Два Текста', description: 'Бесплатный онлайн diff инструмент. Сравнивайте два текста и выделяйте различия рядом.', keywords: 'diff инструмент, сравнить текст, сравнить тексты, diff онлайн' },
      regex: { title: 'Тестер Regex - Тестировать Регулярные Выражения', description: 'Бесплатный онлайн тестер regex. Тестируйте регулярные выражения с живым сопоставлением и выделением.', keywords: 'regex тестер, регулярное выражение, regex онлайн, тестировать regex' },
      color: { title: 'Конвертер Цветов - HEX RGB HSL Конвертация', description: 'Бесплатный онлайн конвертер цветов. Конвертируйте цвета между HEX, RGB, HSL, RGBA форматами.', keywords: 'конвертер цветов, hex в rgb, rgb в hex, цвет инструмент' },
      unit: { title: 'Конвертер Единиц - Длина Вес Температура', description: 'Бесплатный онлайн конвертер единиц. Конвертируйте единицы длины, веса, температуры, данных, времени.', keywords: 'конвертер единиц, конвертировать единицы, конвертер длины, конвертер веса' },
      markdown: { title: 'Markdown Редактор - Писать и Просматривать Markdown', description: 'Бесплатный онлайн Markdown редактор. Пишите и просматривайте Markdown в реальном времени с подсветкой синтаксиса.', keywords: 'markdown редактор, markdown просмотр, md редактор, онлайн markdown' },
      jwt: { title: 'JWT Декодер - Декодировать JSON Web Tokens', description: 'Бесплатный онлайн JWT декодер. Декодируйте JSON Web Tokens и просматривайте заголовок, payload, подпись.', keywords: 'jwt декодер, jwt token, декодировать jwt, jwt онлайн' },
      uuid: { title: 'UUID Генератор - Генерировать UUID v4', description: 'Бесплатный онлайн UUID генератор. Мгновенно генерируйте случайные UUID v4 идентификаторы.', keywords: 'uuid генератор, uuid v4, генерировать uuid, guid генератор' },
      cron: { title: 'Cron Парсер - Анализировать Cron Выражения', description: 'Бесплатный онлайн Cron парсер. Анализируйте cron выражения и получайте понятные описания.', keywords: 'cron парсер, cron выражение, cron план, crontab' },
      qrcode: { title: 'QR Код Генератор - Генерировать QR Коды', description: 'Бесплатный онлайн QR код генератор. Мгновенно генерируйте QR коды из текста или URL.', keywords: 'qr код генератор, генерировать qr, qr онлайн, qr код' },
      privacy: { title: 'Политика Конфиденциальности - JSON Tools', description: 'Узнайте как JSON Tools обрабатывает ваши данные. 100% обработка в браузере, без сбора данных, без cookies трекинга.', keywords: 'политика конфиденциальности, защита данных, обработка в браузере' },
      about: { title: 'О JSON Tools - Бесплатные Онлайн Инструменты Разработчика', description: 'JSON Tools предоставляет более 15 бесплатных онлайн инструментов разработчика. Приватность сначала, мгновенные результаты, многоязычная поддержка.', keywords: 'о json tools, бесплатные инструменты разработчика, онлайн утилиты' },
      terms: { title: 'Условия Использования - JSON Tools', description: 'Условия использования для JSON Tools. Бесплатные онлайн инструменты разработчика с обработкой в браузере.', keywords: 'условия использования, условия, юридическое' },
    },
    
    pages: {
      privacy: {
        title: 'Политика Конфиденциальности',
        lastUpdated: 'Последнее обновление: 24 июня 2026',
        intro: 'В JSON Tools мы серьезно относимся к вашей конфиденциальности. Эта политика объясняет, как мы обрабатываем ваши данные при использовании нашего веб-сайта на tools.nextapi.pro.',
        dataCollection: { title: 'Сбор Данных', content: 'Мы не собираем, не храним и не передаем никаких личных данных. Вся обработка данных (форматирование JSON, кодирование Base64, хеширование и т.д.) полностью происходит в вашем браузере с помощью JavaScript. Ваши данные никогда не покидают ваше устройство.' },
        cookies: { title: 'Файлы Cookie и Локальное Хранилище', content: 'Мы используем localStorage для сохранения языковых настроек и темного режима. Мы не используем отслеживающие cookie. Google AdSense может использовать cookie для показа релевантной рекламы.' },
        thirdParty: { title: 'Сторонние Сервисы', content: 'Мы используем Google AdSense для показа рекламы. Google может собирать анонимные данные об использовании через рекламные cookie.' },
        security: { title: 'Безопасность', content: 'Поскольку вся обработка происходит в вашем браузере, ваши данные так же безопасны, как ваше устройство. Мы используем HTTPS для шифрования всей связи.' },
        changes: { title: 'Изменения в Эта Политике', content: 'Мы можем обновлять эту политику конфиденциальности время от времени. Любые изменения будут опубликованы на этой странице с обновленной датой.' },
        contact: { title: 'Контакт', content: 'Если у вас есть вопросы об этой политике конфиденциальности, свяжитесь с нами по адресу privacy@nextapi.pro.' }
      },
      about: {
        title: 'О JSON Tools',
        mission: { title: 'Наша Миссия', content: 'JSON Tools предоставляет бесплатные высококачественные утилиты для разработчиков, которые уважают вашу конфиденциальность. Мы верим, что мощные инструменты должны быть доступны каждому без ущерба для безопасности данных.' },
        whatWeDo: { title: 'Что Мы Делаем', content: 'Мы предлагаем более 15 онлайн инструментов для разработчиков, включая форматирование JSON/XML, кодирование Base64, кодирование URL, генерацию хешей, преобразование временных меток, сравнение текста, тестирование regex, преобразование цветов, конвертацию единиц, редактирование Markdown, декодирование JWT, генерацию UUID, парсинг cron и генерацию QR кодов.' },
        features: { title: 'Почему Выбирают JSON Tools?', items: ['🔒 100% обработка в браузере', '⚡ Мгновенные результаты', '🌍 Многоязычная поддержка', '🌙 Темный режим', '📱 Адаптивный дизайн', '🆓 Полностью бесплатно'] },
        openSource: { title: 'Открытый Исходный Код', content: 'JSON Tools создан с использованием современных веб-технологий и размещен на Cloudflare.' },
        contact: { title: 'Контакт', content: 'Есть предложения или нашли ошибку? Свяжитесь с нами по адресу contact@nextapi.pro.' }
      },
      terms: {
        title: 'Условия Использования',
        lastUpdated: 'Последнее обновление: 24 июня 2026',
        acceptance: 'Получая доступ и используя JSON Tools (tools.nextapi.pro), вы соглашаетесь соблюдать эти условия. Если вы не согласны, пожалуйста, не используйте наши сервисы.',
        use: { title: 'Использование Сервиса', content: 'JSON Tools предоставляет бесплатные онлайн утилиты для разработчиков. Вся обработка происходит в вашем браузере. Вы можете использовать эти инструменты для личных или коммерческих целей.' },
        ip: { title: 'Интеллектуальная Собственность', content: 'Контент, дизайн и код JSON Tools защищены авторским правом. Вы не можете копировать, изменять или распространять наш исходный код без разрешения.' },
        disclaimer: { title: 'Отказ от Ответственности', content: 'JSON Tools предоставляется "как есть" без каких-либо гарантий. Мы не гарантируем точность результатов любого инструмента.' },
        changes: { title: 'Изменения Условий', content: 'Мы оставляем за собой право изменять эти условия в любое время. Продолжение использования сервиса после изменений означает принятие новых условий.' },
        governing: { title: 'Применимое Право', content: 'Эти условия регулируются и толкуются в соответствии с применимым законодательством.' }
      }
    },
  },
  
  // Portuguese (Português)
  pt: {
    siteName: 'JSON Tools',
    siteDesc: 'Formatador, validador e embelezador JSON online gratuito',
    
    nav: {
      format: 'Formatar',
      encode: 'Codificar',
      dev: 'Dev',
      convert: 'Converter',
      generate: 'Gerar',
      jsonFormatter: 'Formatador JSON',
      xmlFormatter: 'Formatador XML',
      base64: 'Base64',
      urlEncoder: 'Codificador URL',
      hash: 'Hash',
      timestamp: 'Timestamp',
      diff: 'Diff',
      regex: 'Testador Regex',
      color: 'Conversor de Cor',
      unit: 'Conversor de Unidades',
      markdown: 'Editor Markdown',
      jwt: 'Decodificador JWT',
      uuid: 'Gerador UUID',
      cron: 'Analisador Cron',
      qrcode: 'Código QR',
    },
    
    common: {
      input: 'Entrada',
      output: 'Saída',
      copy: 'Copiar',
      copied: 'Copiado!',
      clear: 'Limpar',
      process: 'Processar',
      format: 'Formatar',
      minify: 'Minificar',
      encode: 'Codificar',
      decode: 'Decodificar',
      error: 'Erro',
      invalidXml: 'XML inválido',
      invalidJwt: 'Formato JWT inválido',
    },
    
    tools: {
      jsonFormatter: {
        title: 'Formatador e Validador JSON',
        desc: 'Formate, valide e minifique dados JSON. Gratuito, rápido e seguro — todo o processamento acontece no seu navegador.',
        inputPlaceholder: 'Cole seu JSON aqui...',
        outputPlaceholder: 'JSON formatado aparecerá aqui...',
        inputLabel: 'JSON de Entrada',
        outputLabel: 'Saída',
      },
      
      base64: {
        title: 'Codificador / Decodificador Base64',
        desc: 'Codifique ou decodifique strings Base64. Rápido, gratuito, no navegador.',
        inputPlaceholder: 'Digite texto ou string Base64...',
        outputPlaceholder: 'Resultado aparecerá aqui...',
        encode: 'Codificar (Texto → Base64)',
        decode: 'Decodificar (Base64 → Texto)',
      },
      
      urlEncoder: {
        title: 'Codificador / Decodificador URL',
        desc: 'Codifique ou decodifique componentes URL.',
        inputPlaceholder: 'Digite URL ou texto...',
        outputPlaceholder: 'Resultado aparecerá aqui...',
      },
      
      hash: {
        title: 'Gerador de Hash',
        desc: 'Gere hashes SHA-256 e SHA-1 a partir de texto.',
        inputPlaceholder: 'Digite texto para hash...',
        outputPlaceholder: 'Hash aparecerá aqui...',
        sha256: 'SHA-256',
        sha1: 'SHA-1',
      },
      
      timestamp: {
        title: 'Conversor de Timestamp Unix',
        desc: 'Converta timestamps Unix para datas e vice-versa.',
        inputPlaceholder: 'Digite timestamp...',
        current: 'Timestamp atual',
        toDate: 'Para Data',
        toTimestamp: 'Para Timestamp',
      },
      
      diff: {
        title: 'Ferramenta de Diff de Texto',
        desc: 'Compare dois textos e destaque as diferenças.',
        input1Label: 'Texto Original',
        input2Label: 'Texto Modificado',
        input1Placeholder: 'Cole o texto original aqui...',
        input2Placeholder: 'Cole o texto modificado aqui...',
      },
      
      xmlFormatter: {
        title: 'Formatador XML',
        desc: 'Formate e embeleze documentos XML.',
        comingSoon: 'Esta ferramenta está em desenvolvimento.',
      },
      
      regex: {
        title: 'Testador Regex',
        desc: 'Teste expressões regulares com correspondência em tempo real.',
      },
      
      color: {
        title: 'Conversor de Cores',
        desc: 'Converta cores entre formatos HEX, RGB, HSL, RGBA.',
      },
      
      unit: {
        title: 'Conversor de Unidades',
        desc: 'Converta unidades de comprimento, peso, temperatura, dados, tempo.',
      },
      
      markdown: {
        title: 'Editor Markdown',
        desc: 'Escreva e visualize Markdown em tempo real.',
      },
      
      jwt: {
        title: 'Decodificador JWT',
        desc: 'Decodifique JSON Web Tokens e visualize cabeçalho, payload e assinatura.',
        inputLabel: 'Token JWT',
        inputPlaceholder: 'Cole seu token JWT aqui...',
        headerLabel: 'Cabeçalho (decodificado)',
        headerPlaceholder: 'Cabeçalho JWT aparecerá aqui...',
        payloadLabel: 'Payload (decodificado)',
        payloadPlaceholder: 'Payload JWT aparecerá aqui...',
        signatureLabel: 'Assinatura (base64)',
        signaturePlaceholder: 'Assinatura JWT...',
        decode: 'Decodificar JWT',
      },
      
      uuid: {
        title: 'Gerador UUID',
        desc: 'Gere identificadores UUID v4 aleatórios.',
        countLabel: 'Quantidade',
        generate: 'Gerar UUIDs',
        copyAll: 'Copiar Todos',
        outputLabel: 'UUIDs Gerados',
        outputPlaceholder: 'UUIDs gerados aparecerão aqui...',
      },
      
      cron: {
        title: 'Analisador Cron',
        desc: 'Analise expressões cron e veja descrições legíveis.',
        inputLabel: 'Expressão Cron',
        inputPlaceholder: 'ex., 0 9 * * 1-5',
        presetsLabel: 'Predefinições',
        everyHour: 'Toda Hora',
        everyDay: 'Todo Dia',
        everyWeek: 'Toda Semana',
        everyMonth: 'Todo Mês',
        every5min: 'A Cada 5 Min',
        parse: 'Analisar',
        resultLabel: 'Descrição Legível',
        fieldMinute: 'Minuto',
        fieldHour: 'Hora',
        fieldDay: 'Dia',
        fieldMonth: 'Mês',
        fieldWeekday: 'Dia da Semana',
      },
      
      qrcode: {
        title: 'Gerador de QR Code',
        desc: 'Gere códigos QR a partir de texto ou URLs.',
        inputLabel: 'Conteúdo',
        inputPlaceholder: 'Digite texto ou URL para codificar...',
        sizeLabel: 'Tamanho',
        colorLabel: 'Cor',
        generate: 'Gerar',
        download: 'Baixar',
        placeholder: 'QR code aparecerá aqui',
enterText: 'Insira texto ou URL',
        generateFirst: 'Gere o código QR primeiro',
      },
    },
    
    footer: {
      privacy: '🔒 100% processamento no navegador — seus dados nunca saem do seu computador',
    },
    
    seo: {
      home: { title: 'Formatador e Validador JSON - Ferramenta JSON Online Gratuita', description: 'Formatador, validador e embelezador JSON online gratuito. Formate, minifique e valide dados JSON instantaneamente. Sem cadastro, 100% processamento no navegador.', keywords: 'formatador json, validador json, embelezador json, ferramenta json online' },
      json: { title: 'Formatador JSON - Formatar, Validar e Embelezar JSON', description: 'Formatador JSON online gratuito. Formate, valide, minifique e embeleze dados JSON. Processamento instantâneo, sem cadastro necessário.', keywords: 'formatador json, validador json, embelezador json, json minificar' },
      xml: { title: 'Formatador XML - Formatar e Embelezar Documentos XML', description: 'Formatador XML online gratuito. Formate e embeleze documentos XML instantaneamente. Processamento no navegador.', keywords: 'formatador xml, embelezador xml, validador xml, ferramenta xml online' },
      base64: { title: 'Codificador/Decodificador Base64 - Ferramenta Base64 Online', description: 'Codificador e decodificador Base64 online gratuito. Codifique texto em Base64 ou decodifique Base64 em texto instantaneamente.', keywords: 'codificador base64, decodificador base64, base64 online, codificar decodificar' },
      url: { title: 'Codificador/Decodificador URL - Codificar Componentes URL', description: 'Codificador e decodificador URL online gratuito. Codifique ou decodifique componentes URL e strings de consulta.', keywords: 'codificador url, decodificador url, codificar url, codificação url' },
      hash: { title: 'Gerador de Hash - Ferramenta Hash SHA-256 e SHA-1', description: 'Gerador de hash online gratuito. Gere hashes SHA-256 e SHA-1 a partir de texto instantaneamente.', keywords: 'gerador hash, sha256, sha-1, hash online' },
      timestamp: { title: 'Conversor de Timestamp Unix - Data para Timestamp', description: 'Conversor de timestamp Unix online gratuito. Converta timestamps para datas e vice-versa.', keywords: 'conversor timestamp, unix timestamp, conversor epoch' },
      diff: { title: 'Ferramenta Diff de Texto - Comparar Dois Textos', description: 'Ferramenta diff online gratuita. Compare dois textos e destaque diferenças lado a lado.', keywords: 'ferramenta diff, comparar texto, comparar textos, diff online' },
      regex: { title: 'Testador Regex - Testar Expressões Regulares', description: 'Testador regex online gratuito. Teste expressões regulares com correspondência em tempo real e destaque.', keywords: 'testador regex, expressão regular, regex online, testar regex' },
      color: { title: 'Conversor de Cores - Conversão HEX RGB HSL', description: 'Conversor de cores online gratuito. Converta cores entre formatos HEX, RGB, HSL, RGBA.', keywords: 'conversor cores, hex para rgb, rgb para hex, ferramenta cor' },
      unit: { title: 'Conversor de Unidades - Comprimento Peso Temperatura', description: 'Conversor de unidades online gratuito. Converta unidades de comprimento, peso, temperatura, dados, tempo.', keywords: 'conversor unidades, converter unidades, conversor comprimento, conversor peso' },
      markdown: { title: 'Editor Markdown - Escrever e Visualizar Markdown', description: 'Editor Markdown online gratuito. Escreva e visualize Markdown em tempo real com destaque de sintaxe.', keywords: 'editor markdown, visualização markdown, editor md, markdown online' },
      jwt: { title: 'Decodificador JWT - Decodificar JSON Web Tokens', description: 'Decodificador JWT online gratuito. Decodifique JSON Web Tokens e visualize cabeçalho, payload, assinatura.', keywords: 'decodificador jwt, jwt token, decodificar jwt, jwt online' },
      uuid: { title: 'Gerador UUID - Gerar UUID v4', description: 'Gerador UUID online gratuito. Gere identificadores UUID v4 aleatórios instantaneamente.', keywords: 'gerador uuid, uuid v4, gerar uuid, gerador guid' },
      cron: { title: 'Analisador Cron - Analisar Expressões Cron', description: 'Analisador Cron online gratuito. Analise expressões cron e obtenha descrições legíveis.', keywords: 'analisador cron, expressão cron, cron agendamento, crontab' },
      qrcode: { title: 'Gerador de QR Code - Gerar QR Codes', description: 'Gerador de QR code online gratuito. Gere QR codes a partir de texto ou URLs instantaneamente.', keywords: 'gerador qr code, gerar qr, qr online, qr code' },
      privacy: { title: 'Política de Privacidade - JSON Tools', description: 'Saiba como JSON Tools trata seus dados. 100% processamento no navegador, sem coleta de dados, sem cookies de rastreamento.', keywords: 'política privacidade, proteção dados, processamento navegador' },
      about: { title: 'Sobre JSON Tools - Utilidades de Desenvolvedor Online Gratuitas', description: 'JSON Tools fornece mais de 15 utilidades de desenvolvedor online gratuitas. Privacidade primeiro, resultados instantâneos, suporte multilíngue.', keywords: 'sobre json tools, ferramentas desenvolvedor gratuitas, utilidades online' },
      terms: { title: 'Termos de Serviço - JSON Tools', description: 'Termos de serviço para JSON Tools. Utilidades de desenvolvedor online gratuitas com processamento no navegador.', keywords: 'termos serviço, termos uso, legal' },
    },
    
    pages: {
      privacy: {
        title: 'Política de Privacidade',
        lastUpdated: 'Última atualização: 24 de junho de 2026',
        intro: 'Na JSON Tools, levamos sua privacidade a sério. Esta política explica como lidamos com seus dados quando você usa nosso site em tools.nextapi.pro.',
        dataCollection: { title: 'Coleta de Dados', content: 'Não coletamos, armazenamos ou transmitimos nenhum dado pessoal. Todo o processamento de dados (formatação JSON, codificação Base64, hash, etc.) acontece inteiramente no seu navegador usando JavaScript. Seus dados nunca saem do seu dispositivo.' },
        cookies: { title: 'Cookies e Armazenamento Local', content: 'Usamos localStorage para salvar sua preferência de idioma e modo escuro. Não usamos cookies de rastreamento. O Google AdSense pode usar cookies para exibir anúncios relevantes.' },
        thirdParty: { title: 'Serviços de Terceiros', content: 'Usamos o Google AdSense para exibir anúncios. O Google pode coletar dados de uso anônimos por meio de cookies de anúncios.' },
        security: { title: 'Segurança', content: 'Como todo o processamento acontece no seu navegador, seus dados são tão seguros quanto seu dispositivo. Usamos HTTPS para criptografar todas as comunicações.' },
        changes: { title: 'Alterações nesta Política', content: 'Podemos atualizar esta política de privacidade periodicamente. Quaisquer alterações serão publicadas nesta página com uma data atualizada.' },
        contact: { title: 'Contato', content: 'Se você tiver perguntas sobre esta política de privacidade, entre em contato conosco em privacy@nextapi.pro.' }
      },
      about: {
        title: 'Sobre JSON Tools',
        mission: { title: 'Nossa Missão', content: 'JSON Tools fornece utilitários de desenvolvedor gratuitos e de alta qualidade que respeitam sua privacidade. Acreditamos que ferramentas poderosas devem ser acessíveis a todos sem sacrificar a segurança dos dados.' },
        whatWeDo: { title: 'O Que Fazemos', content: 'Oferecemos mais de 15 ferramentas online para desenvolvedores, incluindo formatação JSON/XML, codificação Base64, codificação URL, geração de hash, conversão de timestamp, diff de texto, teste regex, conversão de cores, conversão de unidades, edição Markdown, decodificação JWT, geração UUID, análise cron e geração de QR code.' },
        features: { title: 'Por Que Escolher JSON Tools?', items: ['🔒 100% processamento no navegador', '⚡ Resultados instantâneos', '🌍 Suporte multilíngue', '🌙 Modo escuro', '📱 Amigável para móveis', '🆓 Completamente gratuito'] },
        openSource: { title: 'Código Aberto', content: 'JSON Tools é construído com tecnologias web modernas e hospedado no Cloudflare.' },
        contact: { title: 'Contato', content: 'Tem sugestões ou encontrou um bug? Entre em contato em contact@nextapi.pro.' }
      },
      terms: {
        title: 'Termos de Serviço',
        lastUpdated: 'Última atualização: 24 de junho de 2026',
        acceptance: 'Ao acessar e usar JSON Tools (tools.nextapi.pro), você concorda em estar vinculado a estes termos. Se você não concordar, por favor, não use nossos serviços.',
        use: { title: 'Uso do Serviço', content: 'JSON Tools fornece utilitários de desenvolvedor online gratuitos. Todo o processamento acontece no seu navegador. Você pode usar essas ferramentas para fins pessoais ou comerciais.' },
        ip: { title: 'Propriedade Intelectual', content: 'O conteúdo, design e código do JSON Tools são protegidos por direitos autorais. Você não pode copiar, modificar ou redistribuir nosso código-fonte sem permissão.' },
        disclaimer: { title: 'Isenção de Responsabilidade', content: 'JSON Tools é fornecido "como está" sem garantias de qualquer tipo. Não garantimos a precisão dos resultados de qualquer ferramenta.' },
        changes: { title: 'Alterações nos Termos', content: 'Reservamo-nos o direito de modificar estes termos a qualquer momento. O uso continuado do serviço após as alterações constitui aceitação dos novos termos.' },
        governing: { title: 'Lei Aplicável', content: 'Estes termos serão regidos e interpretados de acordo com as leis aplicáveis.' }
      }
    },
  },
  
  // Indonesian (Bahasa Indonesia)
  id: {
    siteName: 'JSON Tools',
    siteDesc: 'Pemformat, validator, dan beautifier JSON online gratis',
    
    nav: {
      format: 'Format',
      encode: 'Enkode',
      dev: 'Dev',
      convert: 'Konversi',
      generate: 'Buat',
      jsonFormatter: 'Pemformat JSON',
      xmlFormatter: 'Pemformat XML',
      base64: 'Base64',
      urlEncoder: 'Enkoder URL',
      hash: 'Hash',
      timestamp: 'Timestamp',
      diff: 'Diff',
      regex: 'Tester Regex',
      color: 'Konverter Warna',
      unit: 'Konverter Satuan',
      markdown: 'Editor Markdown',
      jwt: 'Dekoder JWT',
      uuid: 'Generator UUID',
      cron: 'Parser Cron',
      qrcode: 'Kode QR',
    },
    
    common: {
      input: 'Input',
      output: 'Output',
      copy: 'Salin',
      copied: 'Tersalin!',
      clear: 'Hapus',
      process: 'Proses',
      format: 'Format',
      minify: 'Minify',
      encode: 'Enkode',
      decode: 'Dekode',
      error: 'Kesalahan',
      invalidXml: 'XML tidak valid',
      invalidJwt: 'Format JWT tidak valid',
    },
    
    tools: {
      jsonFormatter: {
        title: 'Pemformat dan Validator JSON',
        desc: 'Format, validasi, dan minify data JSON. Gratis, cepat, dan aman — semua pemrosesan terjadi di browser Anda.',
        inputPlaceholder: 'Tempel JSON Anda di sini...',
        outputPlaceholder: 'JSON yang diformat akan muncul di sini...',
        inputLabel: 'JSON Input',
        outputLabel: 'Output',
      },
      
      base64: {
        title: 'Enkoder / Dekoder Base64',
        desc: 'Enkode atau dekode string Base64. Cepat, gratis, di browser.',
        inputPlaceholder: 'Masukkan teks atau string Base64...',
        outputPlaceholder: 'Hasil akan muncul di sini...',
        encode: 'Enkode (Teks → Base64)',
        decode: 'Dekode (Base64 → Teks)',
      },
      
      urlEncoder: {
        title: 'Enkoder / Dekoder URL',
        desc: 'Enkode atau dekode komponen URL.',
        inputPlaceholder: 'Masukkan URL atau teks...',
        outputPlaceholder: 'Hasil akan muncul di sini...',
      },
      
      hash: {
        title: 'Generator Hash',
        desc: 'Buat hash SHA-256 dan SHA-1 dari teks.',
        inputPlaceholder: 'Masukkan teks untuk di-hash...',
        outputPlaceholder: 'Hash akan muncul di sini...',
        sha256: 'SHA-256',
        sha1: 'SHA-1',
      },
      
      timestamp: {
        title: 'Konverter Timestamp Unix',
        desc: 'Konversi timestamp Unix ke tanggal dan sebaliknya.',
        inputPlaceholder: 'Masukkan timestamp...',
        current: 'Timestamp saat ini',
        toDate: 'Ke Tanggal',
        toTimestamp: 'Ke Timestamp',
      },
      
      diff: {
        title: 'Alat Diff Teks',
        desc: 'Bandingkan dua teks dan sorot perbedaan.',
        input1Label: 'Teks Asli',
        input2Label: 'Teks Dimodifikasi',
        input1Placeholder: 'Tempel teks asli di sini...',
        input2Placeholder: 'Tempel teks yang dimodifikasi di sini...',
      },
      
      xmlFormatter: {
        title: 'Pemformat XML',
        desc: 'Format dan beautify dokumen XML.',
        comingSoon: 'Alat ini sedang dalam pengembangan.',
      },
      
      regex: {
        title: 'Tester Regex',
        desc: 'Uji ekspresi reguler dengan pencocokan langsung.',
      },
      
      color: {
        title: 'Konverter Warna',
        desc: 'Konversi warna antara format HEX, RGB, HSL, RGBA.',
      },
      
      unit: {
        title: 'Konverter Satuan',
        desc: 'Konversi satuan panjang, berat, suhu, data, waktu.',
      },
      
      markdown: {
        title: 'Editor Markdown',
        desc: 'Tulis dan pratinjau Markdown secara real-time.',
      },
      
      jwt: {
        title: 'Dekoder JWT',
        desc: 'Dekode JSON Web Tokens dan lihat header, payload, dan signature.',
        inputLabel: 'Token JWT',
        inputPlaceholder: 'Tempel token JWT Anda di sini...',
        headerLabel: 'Header (didekode)',
        headerPlaceholder: 'Header JWT akan muncul di sini...',
        payloadLabel: 'Payload (didekode)',
        payloadPlaceholder: 'Payload JWT akan muncul di sini...',
        signatureLabel: 'Signature (base64)',
        signaturePlaceholder: 'Signature JWT...',
        decode: 'Dekode JWT',
      },
      
      uuid: {
        title: 'Generator UUID',
        desc: 'Buat pengenal UUID v4 acak.',
        countLabel: 'Jumlah',
        generate: 'Buat UUID',
        copyAll: 'Salin Semua',
        outputLabel: 'UUID yang Dibuat',
        outputPlaceholder: 'UUID yang dibuat akan muncul di sini...',
      },
      
      cron: {
        title: 'Parser Cron',
        desc: 'Parse ekspresi cron dan lihat deskripsi yang dapat dibaca.',
        inputLabel: 'Ekspresi Cron',
        inputPlaceholder: 'mis., 0 9 * * 1-5',
        presetsLabel: 'Preset',
        everyHour: 'Setiap Jam',
        everyDay: 'Setiap Hari',
        everyWeek: 'Setiap Minggu',
        everyMonth: 'Setiap Bulan',
        every5min: 'Setiap 5 Menit',
        parse: 'Parse',
        resultLabel: 'Deskripsi yang Dapat Dibaca',
        fieldMinute: 'Menit',
        fieldHour: 'Jam',
        fieldDay: 'Hari',
        fieldMonth: 'Bulan',
        fieldWeekday: 'Hari dalam Minggu',
      },
      
      qrcode: {
        title: 'Generator QR Code',
        desc: 'Buat kode QR dari teks atau URL.',
        inputLabel: 'Konten',
        inputPlaceholder: 'Masukkan teks atau URL untuk dienkode...',
        sizeLabel: 'Ukuran',
        colorLabel: 'Warna',
        generate: 'Buat',
        download: 'Unduh',
        placeholder: 'Kode QR akan muncul di sini',
enterText: 'Masukkan teks atau URL',
        generateFirst: 'Buat kode QR terlebih dahulu',
      },
    },
    
    footer: {
      privacy: '🔒 100% pemrosesan di browser — data Anda tidak pernah meninggalkan komputer Anda',
    },
    
    seo: {
      home: { title: 'Pemformat dan Validator JSON - Alat JSON Online Gratis', description: 'Pemformat, validator, dan beautifier JSON online gratis. Format, minify, dan validasi data JSON secara instan. Tanpa pendaftaran, 100% pemrosesan di browser.', keywords: 'pemformat json, validator json, beautifier json, alat json online' },
      json: { title: 'Pemformat JSON - Format, Validasi, dan Beautify JSON', description: 'Pemformat JSON online gratis. Format, validasi, minify, dan beautify data JSON. Pemrosesan instan, tanpa pendaftaran.', keywords: 'pemformat json, validator json, beautifier json, json minify' },
      xml: { title: 'Pemformat XML - Format dan Beautify Dokumen XML', description: 'Pemformat XML online gratis. Format dan beautify dokumen XML secara instan. Pemrosesan di browser.', keywords: 'pemformat xml, beautifier xml, validator xml, alat xml online' },
      base64: { title: 'Enkoder/Dekoder Base64 - Alat Base64 Online', description: 'Enkoder dan dekoder Base64 online gratis. Enkode teks ke Base64 atau dekode Base64 ke teks secara instan.', keywords: 'enkoder base64, dekoder base64, base64 online, enkode dekode' },
      url: { title: 'Enkoder/Dekoder URL - Enkode Komponen URL', description: 'Enkoder dan dekoder URL online gratis. Enkode atau dekode komponen URL dan string kueri.', keywords: 'enkoder url, dekoder url, enkode url, encoding url' },
      hash: { title: 'Generator Hash - Alat Hash SHA-256 dan SHA-1', description: 'Generator hash online gratis. Hasilkan hash SHA-256 dan SHA-1 dari teks secara instan.', keywords: 'generator hash, sha256, sha-1, hash online' },
      timestamp: { title: 'Konverter Timestamp Unix - Tanggal ke Timestamp', description: 'Konverter timestamp Unix online gratis. Konversi timestamp ke tanggal dan sebaliknya.', keywords: 'konverter timestamp, unix timestamp, konverter epoch' },
      diff: { title: 'Alat Diff Teks - Bandingkan Dua Teks', description: 'Alat diff online gratis. Bandingkan dua teks dan sorot perbedaan secara berdampingan.', keywords: 'alat diff, bandingkan teks, bandingkan teks, diff online' },
      regex: { title: 'Tester Regex - Tes Ekspresi Reguler', description: 'Tester regex online gratis. Tes ekspresi reguler dengan pencocokan langsung dan penyorotan.', keywords: 'tester regex, ekspresi reguler, regex online, tes regex' },
      color: { title: 'Konverter Warna - Konversi HEX RGB HSL', description: 'Konverter warna online gratis. Konversi warna antara format HEX, RGB, HSL, RGBA.', keywords: 'konverter warna, hex ke rgb, rgb ke hex, alat warna' },
      unit: { title: 'Konverter Satuan - Panjang Berat Suhu', description: 'Konverter satuan online gratis. Konversi satuan panjang, berat, suhu, data, waktu.', keywords: 'konverter satuan, konversi satuan, konverter panjang, konverter berat' },
      markdown: { title: 'Editor Markdown - Tulis dan Pratinjau Markdown', description: 'Editor Markdown online gratis. Tulis dan pratinjau Markdown secara real-time dengan penyorotan sintaks.', keywords: 'editor markdown, pratinjau markdown, editor md, markdown online' },
      jwt: { title: 'Dekoder JWT - Dekode JSON Web Tokens', description: 'Dekoder JWT online gratis. Dekode JSON Web Tokens dan lihat header, payload, signature.', keywords: 'dekoder jwt, jwt token, dekode jwt, jwt online' },
      uuid: { title: 'Generator UUID - Hasilkan UUID v4', description: 'Generator UUID online gratis. Hasilkan pengenal UUID v4 acak secara instan.', keywords: 'generator uuid, uuid v4, hasilkan uuid, generator guid' },
      cron: { title: 'Parser Cron - Parse Ekspresi Cron', description: 'Parser Cron online gratis. Parse ekspresi cron dan dapatkan deskripsi yang dapat dibaca.', keywords: 'parser cron, ekspresi cron, jadwal cron, crontab' },
      qrcode: { title: 'Generator QR Code - Hasilkan QR Codes', description: 'Generator QR code online gratis. Hasilkan QR codes dari teks atau URL secara instan.', keywords: 'generator qr code, hasilkan qr, qr online, qr code' },
      privacy: { title: 'Kebijakan Privasi - JSON Tools', description: 'Pelajari bagaimana JSON Tools menangani data Anda. 100% pemrosesan di browser, tanpa pengumpulan data, tanpa cookie pelacakan.', keywords: 'kebijakan privasi, perlindungan data, pemrosesan browser' },
      about: { title: 'Tentang JSON Tools - Utilitas Pengembang Online Gratis', description: 'JSON Tools menyediakan lebih dari 15 utilitas pengembang online gratis. Privasi pertama, hasil instan, dukungan multi-bahasa.', keywords: 'tentang json tools, alat pengembang gratis, utilitas online' },
      terms: { title: 'Ketentuan Layanan - JSON Tools', description: 'Ketentuan layanan untuk JSON Tools. Utilitas pengembang online gratis dengan pemrosesan di browser.', keywords: 'ketentuan layanan, ketentuan penggunaan, legal' },
    },
    
    pages: {
      privacy: {
        title: 'Kebijakan Privasi',
        lastUpdated: 'Terakhir diperbarui: 24 Juni 2026',
        intro: 'Di JSON Tools, kami menganggap privasi Anda dengan serius. Kebijakan ini menjelaskan bagaimana kami menangani data Anda saat menggunakan situs web kami di tools.nextapi.pro.',
        dataCollection: { title: 'Pengumpulan Data', content: 'Kami tidak mengumpulkan, menyimpan, atau mengirimkan data pribadi apa pun. Semua pemrosesan data (pemformatan JSON, enkode Base64, hash, dll.) sepenuhnya terjadi di browser Anda menggunakan JavaScript. Data Anda tidak pernah meninggalkan perangkat Anda.' },
        cookies: { title: 'Cookie & Penyimpanan Lokal', content: 'Kami menggunakan localStorage untuk menyimpan preferensi bahasa dan pengaturan mode gelap Anda. Kami tidak menggunakan cookie pelacakan. Google AdSense mungkin menggunakan cookie untuk menampilkan iklan yang relevan.' },
        thirdParty: { title: 'Layanan Pihak Ketiga', content: 'Kami menggunakan Google AdSense untuk menampilkan iklan. Google mungkin mengumpulkan data penggunaan anonim melalui cookie iklan.' },
        security: { title: 'Keamanan', content: 'Karena semua pemrosesan terjadi di browser Anda, data Anda seaman perangkat Anda. Kami menggunakan HTTPS untuk mengenkripsi semua komunikasi.' },
        changes: { title: 'Perubahan pada Kebijakan Ini', content: 'Kami mungkin memperbarui kebijakan privasi ini dari waktu ke waktu. Setiap perubahan akan diposting di halaman ini dengan tanggal yang diperbarui.' },
        contact: { title: 'Kontak', content: 'Jika Anda memiliki pertanyaan tentang kebijakan privasi ini, silakan hubungi kami di privacy@nextapi.pro.' }
      },
      about: {
        title: 'Tentang JSON Tools',
        mission: { title: 'Misi Kami', content: 'JSON Tools menyediakan utilitas pengembang gratis dan berkualitas tinggi yang menghormati privasi Anda. Kami percaya bahwa alat yang kuat harus dapat diakses oleh semua orang tanpa mengorbankan keamanan data.' },
        whatWeDo: { title: 'Apa yang Kami Lakukan', content: 'Kami menawarkan lebih dari 15 alat online untuk pengembang, termasuk pemformatan JSON/XML, enkode Base64, enkode URL, generasi hash, konversi timestamp, diff teks, pengujian regex, konversi warna, konversi satuan, pengeditan Markdown, dekode JWT, generasi UUID, parsing cron, dan generasi kode QR.' },
        features: { title: 'Mengapa Memilih JSON Tools?', items: ['🔒 100% pemrosesan di browser', '⚡ Hasil instan', '🌍 Dukungan multi-bahasa', '🌙 Mode gelap', '📱 Ramah seluler', '🆓 Sepenuhnya gratis'] },
        openSource: { title: 'Sumber Terbuka', content: 'JSON Tools dibangun dengan teknologi web modern dan di-host di Cloudflare.' },
        contact: { title: 'Kontak', content: 'Punya saran atau menemukan bug? Hubungi kami di contact@nextapi.pro.' }
      },
      terms: {
        title: 'Ketentuan Layanan',
        lastUpdated: 'Terakhir diperbarui: 24 Juni 2026',
        acceptance: 'Dengan mengakses dan menggunakan JSON Tools (tools.nextapi.pro), Anda setuju untuk terikat oleh ketentuan ini. Jika Anda tidak setuju, mohon jangan menggunakan layanan kami.',
        use: { title: 'Penggunaan Layanan', content: 'JSON Tools menyediakan utilitas pengembang online gratis. Semua pemrosesan terjadi di browser Anda. Anda dapat menggunakan alat ini untuk tujuan pribadi atau komersial.' },
        ip: { title: 'Kekayaan Intelektual', content: 'Konten, desain, dan kode JSON Tools dilindungi oleh hak cipta. Anda tidak boleh menyalin, memodifikasi, atau mendistribusikan ulang kode sumber kami tanpa izin.' },
        disclaimer: { title: 'Penafian', content: 'JSON Tools disediakan "sebagaimana adanya" tanpa jaminan apa pun. Kami tidak menjamin keakuratan hasil dari alat apa pun.' },
        changes: { title: 'Perubahan Ketentuan', content: 'Kami berhak mengubah ketentuan ini kapan saja. Penggunaan layanan yang berkelanjutan setelah perubahan merupakan penerimaan dari ketentuan baru.' },
        governing: { title: 'Hukum yang Berlaku', content: 'Ketentuan ini akan diatur dan ditafsirkan sesuai dengan hukum yang berlaku.' }
      }
    },
  },
  
  // Arabic (العربية)
  ar: {
    siteName: 'JSON Tools',
    siteDesc: 'منسق ومتحقق ومجمل JSON مجاني عبر الإنترنت',
    
    nav: {
      format: 'تنسيق',
      encode: 'ترميز',
      dev: 'تطوير',
      convert: 'تحويل',
      generate: 'إنشاء',
      jsonFormatter: 'منسق JSON',
      xmlFormatter: 'منسق XML',
      base64: 'Base64',
      urlEncoder: 'مشفّر URL',
      hash: 'Hash',
      timestamp: 'طابع زمني',
      diff: 'مقارنة',
      regex: 'مختبر Regex',
      color: 'محول الألوان',
      unit: 'محول الوحدات',
      markdown: 'محرر Markdown',
      jwt: 'مفكك JWT',
      uuid: 'مولد UUID',
      cron: 'محلل Cron',
      qrcode: 'رمز QR',
    },
    
    common: {
      input: 'إدخال',
      output: 'إخراج',
      copy: 'نسخ',
      copied: 'تم النسخ!',
      clear: 'مسح',
      process: 'معالجة',
      format: 'تنسيق',
      minify: 'تصغير',
      encode: 'ترميز',
      decode: 'فك الترميز',
      error: 'خطأ',
      invalidXml: 'XML غير صالح',
      invalidJwt: 'صيغة JWT غير صالحة',
    },
    
    tools: {
      jsonFormatter: {
        title: 'منسق ومتحقق JSON',
        desc: 'نسق، تحقق، وقلل بيانات JSON. مجاني، سريع، وآمن — كل المعالجة تتم في متصفحك.',
        inputPlaceholder: 'الصق JSON هنا...',
        outputPlaceholder: 'سوف يظهر JSON المنسق هنا...',
        inputLabel: 'JSON للإدخال',
        outputLabel: 'الإخراج',
      },
      
      base64: {
        title: 'مشفّر / مفكك Base64',
        desc: 'شفّر أو فك ترميز سلاسل Base64. سريع، مجاني، في المتصفح.',
        inputPlaceholder: 'أدخل نص أو سلسلة Base64...',
        outputPlaceholder: 'سوف يظهر النتيجة هنا...',
        encode: 'ترميز (نص ← Base64)',
        decode: 'فك الترميز (Base64 ← نص)',
      },
      
      urlEncoder: {
        title: 'مشفّر / مفكك URL',
        desc: 'شفّر أو فك ترميز مكونات URL.',
        inputPlaceholder: 'أدخل URL أو نص...',
        outputPlaceholder: 'سوف يظهر النتيجة هنا...',
      },
      
      hash: {
        title: 'مولد Hash',
        desc: 'أنشئ Hash من نوع SHA-256 و SHA-1 من النص.',
        inputPlaceholder: 'أدخل نص لل Hash...',
        outputPlaceholder: 'سوف يظهر Hash هنا...',
        sha256: 'SHA-256',
        sha1: 'SHA-1',
      },
      
      timestamp: {
        title: 'محول الطابع الزمني Unix',
        desc: 'حوّل الطوابع الزمنية Unix إلى تواريخ والعكس.',
        inputPlaceholder: 'أدخل طابع زمني...',
        current: 'الطابع الزمني الحالي',
        toDate: 'إلى تاريخ',
        toTimestamp: 'إلى طابع زمني',
      },
      
      diff: {
        title: 'أداة مقارنة النصوص',
        desc: 'قارن نصين وأبرز الاختلافات.',
        input1Label: 'النص الأصلي',
        input2Label: 'النص المعدل',
        input1Placeholder: 'الصق النص الأصلي هنا...',
        input2Placeholder: 'الصق النص المعدل هنا...',
      },
      
      xmlFormatter: {
        title: 'منسق XML',
        desc: 'نسق وجمّل مستندات XML.',
        comingSoon: 'هذه الأداة قيد التطوير.',
      },
      
      regex: {
        title: 'مختبر Regex',
        desc: 'اختبر التعبيرات النمطية مع المطابقة المباشرة.',
      },
      
      color: {
        title: 'محول الألوان',
        desc: 'حوّل الألوان بين صيغ HEX، RGB، HSL، RGBA.',
      },
      
      unit: {
        title: 'محول الوحدات',
        desc: 'حوّل وحدات الطول، الوزن، الحرارة، البيانات، الوقت.',
      },
      
      markdown: {
        title: 'محرر Markdown',
        desc: 'اكتب واستعرض Markdown في الوقت الفعلي.',
      },
      
      jwt: {
        title: 'مفكك JWT',
        desc: 'فك ترميز JSON Web Tokens واعرض الترويسة، الحمولة، والتوقيع.',
        inputLabel: 'Token JWT',
        inputPlaceholder: 'الصق token JWT هنا...',
        headerLabel: 'الترويسة (مفككة)',
        headerPlaceholder: 'سوف تظهر ترويسة JWT هنا...',
        payloadLabel: 'الحمولة (مفككة)',
        payloadPlaceholder: 'سوف تظهر حمولة JWT هنا...',
        signatureLabel: 'التوقيع (base64)',
        signaturePlaceholder: 'توقيع JWT...',
        decode: 'فك ترميز JWT',
      },
      
      uuid: {
        title: 'مولد UUID',
        desc: 'أنشئ معرفات UUID v4 عشوائية.',
        countLabel: 'العدد',
        generate: 'إنشاء UUIDs',
        copyAll: 'نسخ الكل',
        outputLabel: 'UUIDs المُنشأة',
        outputPlaceholder: 'سوف تظهر UUIDs المُنشأة هنا...',
      },
      
      cron: {
        title: 'محلل Cron',
        desc: 'حلّل تعبيرات Cron وشاهد أوصافًا قابلة للقراءة.',
        inputLabel: 'تعبير Cron',
        inputPlaceholder: 'مثال، 0 9 * * 1-5',
        presetsLabel: 'الإعدادات المسبقة',
        everyHour: 'كل ساعة',
        everyDay: 'كل يوم',
        everyWeek: 'كل أسبوع',
        everyMonth: 'كل شهر',
        every5min: 'كل 5 دقائق',
        parse: 'تحليل',
        resultLabel: 'وصف قابل للقراءة',
        fieldMinute: 'دقيقة',
        fieldHour: 'ساعة',
        fieldDay: 'يوم',
        fieldMonth: 'شهر',
        fieldWeekday: 'يوم الأسبوع',
      },
      
      qrcode: {
        title: 'مولد رمز QR',
        desc: 'أنشئ رموز QR من نص أو عناوين URL.',
        inputLabel: 'المحتوى',
        inputPlaceholder: 'أدخل نص أو URL للترميز...',
        sizeLabel: 'الحجم',
        colorLabel: 'اللون',
        generate: 'إنشاء',
        download: 'تنزيل',
        placeholder: 'سوف يظهر رمز QR هنا',
enterText: 'الرجاء إدخال نص أو رابط',
        generateFirst: 'قم بإنشاء رمز QR أولاً',
      },
    },
    
    footer: {
      privacy: '🔒 100% معالجة في المتصفح — بياناتك لا تغادر جهازك أبدًا',
    },
    
    seo: {
      home: { title: 'منسق ومتحقق JSON - أداة JSON مجانية عبر الإنترنت', description: 'منسق ومتحقق ومجمل JSON مجاني عبر الإنترنت. نسق، صغر، وتحقق من بيانات JSON فورًا. بدون تسجيل، 100% معالجة في المتصفح.', keywords: 'منسق json, متحقق json, مجمل json, أداة json عبر الإنترنت' },
      json: { title: 'منسق JSON - نسق، تحقق، وجمّل JSON', description: 'منسق JSON مجاني عبر الإنترنت. نسق، تحقق، صغر، وجمّل بيانات JSON. معالجة فورية، بدون تسجيل.', keywords: 'منسق json, متحقق json, مجمل json, تصغير json' },
      xml: { title: 'منسق XML - نسق وجمّل مستندات XML', description: 'منسق XML مجاني عبر الإنترنت. نسق وجمّل مستندات XML فورًا. معالجة في المتصفح.', keywords: 'منسق xml, مجمل xml, متحقق xml, أداة xml عبر الإنترنت' },
      base64: { title: 'مشفّر/مفكك Base64 - أداة Base64 عبر الإنترنت', description: 'مشفّر ومفكك Base64 مجاني عبر الإنترنت. شفّر نص إلى Base64 أو فك ترميز Base64 إلى نص فورًا.', keywords: 'مشفّر base64, مفكك base64, base64 عبر الإنترنت, تشفير فك تشفير' },
      url: { title: 'مشفّر/مفكك URL - تشفير مكونات URL', description: 'مشفّر ومفكك URL مجاني عبر الإنترنت. شفّر أو فك ترميز مكونات URL وسلاسل الاستعلام.', keywords: 'مشفّر url, مفكك url, تشفير url, ترميز url' },
      hash: { title: 'مولد Hash - أداة Hash SHA-256 و SHA-1', description: 'مولد Hash مجاني عبر الإنترنت. أنشئ Hash SHA-256 و SHA-1 من نص فورًا.', keywords: 'مولد hash, sha256, sha-1, hash عبر الإنترنت' },
      timestamp: { title: 'محول الطابع الزمني Unix - تاريخ إلى طابع زمني', description: 'محول الطابع الزمني Unix مجاني عبر الإنترنت.حوّل الطوابع الزمنية إلى تواريخ والعكس.', keywords: 'محول طابع زمني, unix طابع زمني, محول epoch' },
      diff: { title: 'أداة مقارنة النصوص - قارن نصين', description: 'أداة مقارنة مجانية عبر الإنترنت. قارن نصين وأبرز الاختلافات جنبًا إلى جنب.', keywords: 'أداة مقارنة, قارن نص, قارن نصوص, مقارنة عبر الإنترنت' },
      regex: { title: 'مختبر Regex - اختبار التعبيرات النمطية', description: 'مختبر Regex مجاني عبر الإنترنت. اختبر التعبيرات النمطية مع مطابقة فورية وتسليط الضوء.', keywords: 'مختبر regex, تعبير نمطي, regex عبر الإنترنت, اختبار regex' },
      color: { title: 'محول الألوان - تحويل HEX RGB HSL', description: 'محول الألوان مجاني عبر الإنترنت.حوّل الألوان بين صيغ HEX، RGB، HSL، RGBA.', keywords: 'محول ألوان, hex إلى rgb, rgb إلى hex, أداة ألوان' },
      unit: { title: 'محول الوحدات - طول وزن حرارة', description: 'محول الوحدات مجاني عبر الإنترنت.حوّل وحدات الطول، الوزن، الحرارة، البيانات، الوقت.', keywords: 'محول وحدات, تحويل وحدات, محول طول, محول وزن' },
      markdown: { title: 'محرر Markdown - كتابة ومعاينة Markdown', description: 'محرر Markdown مجاني عبر الإنترنت. اكتب وعاين Markdown في الوقت الفعلي مع تسليط الضوء على النص.', keywords: 'محرر markdown, معاينة markdown, محرر md, markdown عبر الإنترنت' },
      jwt: { title: 'مفكك JWT - فك ترميز JSON Web Tokens', description: 'مفكك JWT مجاني عبر الإنترنت. فك ترميز JSON Web Tokens وعرض الترويسة، الحمولة، التوقيع.', keywords: 'مفكك jwt, jwt token, فك jwt, jwt عبر الإنترنت' },
      uuid: { title: 'مولد UUID - إنشاء UUID v4', description: 'مولد UUID مجاني عبر الإنترنت. أنشئ معرفات UUID v4 عشوائية فورًا.', keywords: 'مولد uuid, uuid v4, إنشاء uuid, مولد guid' },
      cron: { title: 'محلل Cron - تحليل تعبيرات Cron', description: 'محلل Cron مجاني عبر الإنترنت. حلّل تعبيرات Cron واحصل على أوصاف قابلة للقراءة.', keywords: 'محلل cron, تعبير cron, جدول cron, crontab' },
      qrcode: { title: 'مولد رمز QR - إنشاء رموز QR', description: 'مولد رمز QR مجاني عبر الإنترنت. أنشئ رموز QR من نص أو عناوين URL فورًا.', keywords: 'مولد qr code, إنشاء qr, qr عبر الإنترنت, qr code' },
      privacy: { title: 'سياسة الخصوصية - JSON Tools', description: 'تعرف على كيفية معالجة JSON Tools لبياناتك. 100% معالجة في المتصفح، بدون جمع بيانات، بدون ملفات تعريف تتبع.', keywords: 'سياسة خصوصية, حماية بيانات, معالجة متصفح' },
      about: { title: 'حول JSON Tools - أدوات مطور مجانية عبر الإنترنت', description: 'JSON Tools يوفر أكثر من 15 أداة مطور مجانية عبر الإنترنت. الخصوصية أولًا، نتائج فورية، دعم متعدد اللغات.', keywords: 'حول json tools, أدوات مطور مجانية, أدوات عبر الإنترنت' },
      terms: { title: 'شروط الخدمة - JSON Tools', description: 'شروط خدمة JSON Tools. أدوات مطور مجانية عبر الإنترنت مع معالجة في المتصفح.', keywords: 'شروط خدمة, شروط استخدام, قانوني' },
    },
    
    pages: {
      privacy: {
        title: 'سياسة الخصوصية',
        lastUpdated: 'آخر تحديث: 24 يونيو 2026',
        intro: 'في JSON Tools، نأخذ خصوصيتك على محمل الجد. تشرح هذه السياسة كيف نتعامل مع بياناتك عند استخدام موقعنا على tools.nextapi.pro.',
        dataCollection: { title: 'جمع البيانات', content: 'نجمع أو نخزن أو ننقل أي بيانات شخصية. تتم جميع معالجة البيانات (تنسيق JSON، ترميز Base64، Hash، إلخ) بالكامل في متصفحك باستخدام JavaScript. بياناتك لا تغادر جهازك أبدًا.' },
        cookies: { title: 'ملفات تعريف الارتباط والتخزين المحلي', content: 'نستخدم localStorage لحفظ تفضيل اللغة وإعداد الوضع الداكن. لا نستخدم ملفات تعريف ارتباط للتتبع. قد يستخدم Google AdSense ملفات تعريف الارتباط لعرض إعلانات ذات صلة.' },
        thirdParty: { title: 'خدمات الطرف الثالث', content: 'نستخدم Google AdSense لعرض الإعلانات. قد يجمع Google بيانات استخدام مجهولة من خلال ملفات تعريف ارتباط الإعلانات.' },
        security: { title: 'الأمان', content: 'بما أن جميع المعالجة تتم في متصفحك، فإن بياناتك آمنة بقدر أمان جهازك. نستخدم HTTPS لتشفير جميع الاتصالات.' },
        changes: { title: 'التغييرات على هذه السياسة', content: 'قد نقوم بتحديث سياسة الخصوصية هذه من وقت لآخر. سيتم نشر أي تغييرات على هذه الصفحة مع تاريخ محدث.' },
        contact: { title: 'اتصل بنا', content: 'إذا كان لديك أسئلة حول سياسة الخصوصية هذه، يرجى الاتصال بنا على privacy@nextapi.pro.' }
      },
      about: {
        title: 'عن JSON Tools',
        mission: { title: 'مهمتنا', content: 'توفر JSON Tools أدوات مطور مجانية وعالية الجودة تحترم خصوصيتك. نعتقد أن الأدوات القوية يجب أن تكون متاحة للجميع دون التضحية بأمن البيانات.' },
        whatWeDo: { title: 'ماذا نفعل', content: 'نقدم أكثر من 15 أداة عبر الإنترنت للمطورين، بما في ذلك تنسيق JSON/XML، ترميز Base64، ترميز URL، إنشاء Hash، تحويل الطوابع الزمنية، مقارنة النصوص، اختبار Regex، تحويل الألوان، تحويل الوحدات، تحرير Markdown، فك ترميز JWT، إنشاء UUID، تحليل Cron، وإنشاء رموز QR.' },
        features: { title: 'لماذا تختار JSON Tools؟', items: ['🔒 100% معالجة في المتصفح', '⚡ نتائج فورية', '🌍 دعم متعدد اللغات', '🌙 الوضع الداكن', '📱 متوافق مع الهواتف', '🆓 مجاني تمامًا'] },
        openSource: { title: 'مفتوح المصدر', content: 'تم بناء JSON Tools بتقنيات ويب حديثة ومستضاف على Cloudflare.' },
        contact: { title: 'اتصل بنا', content: 'هل لديك اقتراحات أو وجدت خطأ؟ تواصل معنا على contact@nextapi.pro.' }
      },
      terms: {
        title: 'شروط الخدمة',
        lastUpdated: 'آخر تحديث: 24 يونيو 2026',
        acceptance: 'بالدخول إلى واستخدام JSON Tools (tools.nextapi.pro)، فإنك توافق على الالتزام بهذه الشروط. إذا كنت لا توافق، يرجى عدم استخدام خدماتنا.',
        use: { title: 'استخدام الخدمة', content: 'توفر JSON Tools أدوات مطور مجانية عبر الإنترنت. تتم جميع المعالجة في متصفحك. يمكنك استخدام هذه الأدوات لأغراض شخصية أو تجارية.' },
        ip: { title: 'الملكية الفكرية', content: 'المحتوى والتصميم والكود الخاص بـ JSON Tools محمي بموجب حقوق النشر. لا يجوز لك نسخ أو تعديل أو إعادة توزيع الكود المصدري الخاص بنا دون إذن.' },
        disclaimer: { title: 'إخلاء المسؤولية', content: 'يتم توفير JSON Tools "كما هو" دون أي ضمانات. لا نضمن دقة نتائج أي أداة.' },
        changes: { title: 'التغييرات على الشروط', content: 'نحتفظ بالحق في تعديل هذه الشروط في أي وقت. يشكل الاستخدام المستمر للخدمة بعد التغييرات قبولاً للشروط الجديدة.' },
        governing: { title: 'القانون الحاكم', content: 'تخضع هذه الشروط وتُفسر وفقًا للقوانين المعمول بها.' }
      }
    },
  },
}

export type Lang = keyof typeof translations
export type Translation = typeof translations.en

export function getLang(): Lang {
  const params = new URLSearchParams(window.location.search)
  const lang = params.get('lang') as Lang
  if (lang && translations[lang]) return lang
  
  const stored = localStorage.getItem('lang') as Lang
  if (stored && translations[stored]) return stored
  
  const browserLang = navigator.language.split('-')[0] as Lang
  if (translations[browserLang]) return browserLang
  
  return 'en'
}

export function setLang(lang: Lang) {
  const params = new URLSearchParams(window.location.search)
  params.set('lang', lang)
  window.history.replaceState(null, '', '?' + params.toString())
  localStorage.setItem('lang', lang)
}

export function t(lang: Lang): Translation {
  return translations[lang] || translations.en
}