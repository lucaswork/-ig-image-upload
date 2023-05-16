const acceptedFormatsRegex =
  /(?:([^:/?#]+):)?(?:([^/?#]*))?([^?#](?:jpeg|gif|png))(?:\?([^#]*))?(?:#(.*))?/g;

export const formValidations = {
  image: {
    required: 'Arquivo obrigatório',
    validate: {
      lessThan10Mb: fileList =>
        fileList[0].size < 10000000 || 'O arquivo deve ser menor que 10MB',
      acceptedFormats: fileList =>
        acceptedFormatsRegex.test(fileList[0].type) ||
        'Somente são aceitos arquivos PNG, JPEG e GIF',
    },
  },
  title: {
    required: 'Título obrigatório',
    minLength: {
      value: 2,
      message: 'Mínimo de 2 caracteres',
    },
    maxLength: {
      value: 20,
      message: 'Máximo de 20 caracteres',
    },
  },
  description: {
    required: 'Descrição obrigatória',
    maxLength: {
      value: 65,
      message: 'Máximo de 65 caracteres',
    },
  },
};
