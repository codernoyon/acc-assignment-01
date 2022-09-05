# random-user-server

## The api is hosted on Heroku, to get the api  [**`Click here`**](https://safe-lake-30552.herokuapp.com/)

Make sure to test the API with Postman or any other REST client. (Recommended to use Postman)

---

This is a simple api that allows you to create, read, random read, update , bulk update, delete using the following endpoints

```
   1. Get a random user: GET /user/random
   2. Get a single user: GET /user/id/:id
   3. Get all users: GET /user/all
   4. Create a user: POST /user/save
   5. Update a user: PUT /user/update/:id
   6. Bulk update users: PUT /user/bulk-update
   7. Delete a user: DELETE /user/delete/:id
```

Multiple user update (/user/bulk-update) body JSON data sample

```{
    "userNewData": [
        {
        "id": 11,
        "contact": "+8801999999999"

        },
        {
        "id": 12,
        "contact": "+8801777777777"
        }
    ]
}
```

---

## Technologies used in this project

- NodeJS
- ExpressJS
- Cors
- Nodemon (For developmnet purpose)

---

## Connect with me

<div align="center">
<a href="https://twitter.com/codernoyon" target="_blank">
<img src=https://img.shields.io/badge/twitter-%2300acee.svg?&style=for-the-badge&logo=twitter&logoColor=white alt=twitter style="margin-bottom: 5px;" />
</a>
<a href="https://dev.to/codernoyon" target="_blank">
<img src=https://img.shields.io/badge/dev.to-%2308090A.svg?&style=for-the-badge&logo=dev.to&logoColor=white alt=devto style="margin-bottom: 5px;" />
</a>
<a href="https://linkedin.com/in/codernoyon" target="_blank">
<img src=https://img.shields.io/badge/linkedin-%231E77B5.svg?&style=for-the-badge&logo=linkedin&logoColor=white alt=linkedin style="margin-bottom: 5px;" />
</a>
<a href="https://www.facebook.com/codernoyon" target="_blank">
<img src=https://img.shields.io/badge/facebook-%232E87FB.svg?&style=for-the-badge&logo=facebook&logoColor=white alt=facebook style="margin-bottom: 5px;" />
</a>
<a href="https://instagram.com/codernoyon" target="_blank">
<img src=https://img.shields.io/badge/instagram-%23000000.svg?&style=for-the-badge&logo=instagram&logoColor=white alt=instagram style="margin-bottom: 5px;" />
</a>
<a href="https://github.com/codernoyon" target="_blank">
<img src=https://img.shields.io/badge/github-%2324292e.svg?&style=for-the-badge&logo=github&logoColor=white alt=github style="margin-bottom: 5px;" />
</a>
<a href="https://codepen.com/codernoyon" target="_blank">
<img src=https://img.shields.io/badge/codepen-%23131417.svg?&style=for-the-badge&logo=codepen&logoColor=white alt=codepen style="margin-bottom: 5px;" />
</a>
<a href="https://stackoverflow.com/users/17615131/codernoyon" target="_blank">
<img src=https://img.shields.io/badge/stackoverflow-%23F28032.svg?&style=for-the-badge&logo=stackoverflow&logoColor=white alt=stackoverflow style="margin-bottom: 5px;" />
</a>
<a href="https://dribbble.com/codernoyon" target="_blank">
<img src=https://img.shields.io/badge/dribbble-%23E45285.svg?&style=for-the-badge&logo=dribbble&logoColor=white alt=dribbble style="margin-bottom: 5px;" />
</a>
<a href="https://www.behance.net/codernoyon" target="_blank">
<img src=https://img.shields.io/badge/behance-%23191919.svg?&style=for-the-badge&logo=behance&logoColor=white alt=behance style="margin-bottom: 5px;" />
</a>
<a href="https://www.youtube.com/c/codernoyon" target="_blank">
<img src=https://img.shields.io/badge/youtube-%23EE4831.svg?&style=for-the-badge&logo=youtube&logoColor=white alt=youtube style="margin-bottom: 5px;" />
</a>  
</div>
