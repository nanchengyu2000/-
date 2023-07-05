  export function getContext(context){
      if (context.indexOf('(')!=-1||context.indexOf('[')!=-1) {
          context=context.split(':')[0]
          return context.slice(1,context.length)
      }
      return context
  }