# react-test-vite

<!-- Formik, валідація через Yup -->
<!-- npm install formik -->
<!-- npm i yup -->

- Formik ( npm install formik);
- 1. -= Валідація =-: npm i yup (та import \* as Yup fro 'yup');
- 2. const orderShema = Yup.object().shape({});
- 2.1. Example: const orderShema = Yup.object().shape({ username:
  Yup.string().min(3, 'Поле не може бути менше 3 символів').max(20).required(),
  });
- 3. orderShema повісити на Formik через validationSchema={orderShema};
- 4. ErrorMessage на label, що валідуємо
     (<ErrorMessage name="username" component="span" />); component - яв чому
     вивести помилку;
- 5. Error можна стилізувати className;
- 6. валідація email проблематична, додамо регулярний вираз:
     /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)\*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
- 7.
