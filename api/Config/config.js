const env = process.env.NODE_ENV || 'dev';

// eslint-disable-next-line consistent-return
const config = () => {
  // eslint-disable-next-line default-case
  switch (env) {
    case 'dev':
      return {
        database:
          'mongodb+srv://brino:123@cluster0-njrky.azure.mongodb.net/techConnective?retryWrites=true&w=majority',
        secret: '6f12ec104f3a9f9b4e2f7e669cc91314',
        expiresIn: '2d',
      };
    case 'prod':
      return {
        database:
          'mongodb+srv://brino:123@cluster0-njrky.azure.mongodb.net/techConnective?retryWrites=true&w=majority',
        secret:
          'MIIEvgIBADANBgkqhkiG9w0BAQEFAASCBKgwggSkAgEAAoIBAQCPNnJwDwbm89mLtTdHTtcb4OAEduDmua1AbF2St90DBtEbUOFhWod7muqLVqTWmeQ3HBPzcV4nxROopDbWg1Zl4gkLagaHL/Jb0q4QPJ/ZzsQGDC4nWM/XK+hcIn1I/EMpnUyxDIUNHghp0hsq5RteUrn3FnmwgHCNUCEymJLSa6qs3pjB5QUc2342XdAafDVSktmaelLwrD3ywUSl95rYBtWtJT/qihVkmLvLiDy3ezq5NyxySq0B5WdmQzdCOCEgSNzRqQeXb1ghV/k5YOA2n6Lci5cMECq6mRsCFg34VGEz1/6CsvUdmhFArzUhu1ionvIn0kh+SAgdZW0/nt7pAgMBAAECggEAF8VTzWHRJXiIPXZAzKc7cTcsN9F7lxBuv2i9R2MZXi09fCk6n6wlHNEj6Sjih3RXuwYAEcJZfIRrtOw85fI63wJbufdJShsdQTyBA9TsO3zkcJSI/KLzLKXvFYvr+7dTdo7TcffABeNcRiRHuiD5H/jfQTIL1M4c4HfSatGEXUSc6fecmgZfKSbMexdbe5FD/wNhFQn8dzCHoPAwtoY0a8Ujkqv6bawBydlCW3SbMELB0poI5SGAEOpQW28quCVakMH9jiF+mmBedumLUO8nW3OyUiff+jaqgy7JefB3LHDVWCsXtBOq5tIqfJvoZaMj+odQ+9Bj/ole0afiPU2LYQKBgQDpXBcjJj3YEDnrCy/47Qvg/84GMlm9RWqbGr3Yyrw1f1DFMMTVmaH/PieGJkUAQTvAY5hoK12LGk5mMbNpC3dzqT5s2AZPoCsLGy56kWVGCVNDNhVPQLQd3Fp9Kjezn8DrwO7CDbLnUBYgzbQ6sSSKE6gTDKSlnBpp2cGD37Ov1QKBgQCdG2Rqgja0MPfbs8XO0yVQaP/YnxOzJxFHT2F4aBVX1rifGtD5jPRWNl+Z+gIsfFIpZLtxURVk3zPx3gQO/rGNXMOX7r0DFq9cDjXePSz4G//w/4JTmzHEPyA+F0UTNKnSJfIKcaBLr1342yGk4cAMD08ue344ZSKGhJ+5ns5QxQKBgH1G+gjdq8/FjkJXpC5fm8PzsDf1aeXJUVzpM0giNn4F1me2McV2D9jGFlPXUa28V4aGMTijJznZKoOEZQuco0kNb7zhECpJEzKIKiCU06iQswlfDHuagdeSB2YwduzQc7JcxhCZaBT0Ep0TsZDcroAN42ounGln72oqA9B3FLDtAoGBAIro3151B51G9sAhMbLvajywuhZ0gNyUnGhqvYnSrZxe1BqJgWBEyv03Ukw4i5d9zL+gu0M0KDBqUel3HiuL8r1E2gQKKMEEW8SPI/3+JTayuxgBMuBthhE4p29+76pNlCGlP18QnGSPCA2y4wqAOGfxWVeGBVIjyeUaeoeK7GzpAoGBALoPOWX10FrmkxhhKblSWv/ywkRONRbrPhUDEupn4k9+MHl3jpx85bEnzJQL/8g2hp02YXDtVLs8eGQYD1gWO136e3PLNo8e2svVi3wE6xn037D8XimaPcaKWbA0argv5qXjXGpzTSbuWN+xKBssIWhSYQMXfK8hfZzLnGWU78jD',
        expiresIn: 43200,
      };
  }
};
console.log(`Iniciando a aplicação em ambiente: ${env.toUpperCase()}`);

module.exports = config();
