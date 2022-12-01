# API DOCUMENTATION

## HOST: https://group-project-be-15-production.up.railway.app

## Sign Up [/signup]

### Sign Up [POST]

Fitur untuk daftar akun user

- Request

        {
           "full_name": "Nama Lengkap",
           "username": "Username",
           "email": "Email",
           "password": "Password"
        }

- Response 201 (application/json)
  <br>Body
  <br>
  ```
  {
    "message": "Berhasil Sign Up",
    "_id": "_id",
    "full_name": "full_name",
    "email": "email",
    "username": "username",
    "role": "role",
    "pic": "pic"
  }
  ```

## Sign In [/signin]

### Sign In [POST]

Fitur untuk login

- Request

        {
           "username": "Username",
           "password": "Password"
        }

- Response 201 (application/json)
  <br>Body
  ```
  {
    "message": "Berhasil Sign In role",
    "user": {
                "_id": "_id",
                "full_name": "full_name",
                "username": "username",
                "email": "email",
                "password": "password",
                "role": "role",
                "pic": "pic",
                "createdAt": "timestamp",
                "updatedAt": "timestamp",
                "__v": 0
                },
                "token": "token"
  }
  ```

## Update Profile [/profile/:id]

### Update Profile [PUT]

- Authorization
  <br>Bearer Token: token

- Request

  ```
  {
     "full_name": "Nama Lengkap",
     "username": "Username",
     "email": "Email",
     "password": "Password",
     "role": "role"
  }
  ```

- Response 200 (application/json)
  <br>Body

        {
            "message": "user berhasil diupdate",
            "_id": "new _id",
            "full_name": "new fullname",
            "email": "new email",
            "username": "new username",
            "role": "role",
            "pic": "new pic",
            "token": "new token"
        }

## Users [/users]

### Daftar semua users [GET]

Fitur untuk melihat data pegawai hanya bisa diakses oleh role admin

- Authorization
  <br>Bearer Token: token

- Response 200 (application/json)
  ```
  {
    "user": [
                {
                    "_id": "_id",
                    "full_name": "full_name",
                    "username": "username",
                    "email": "email",
                    "password": "password",
                    "role": "role",
                    "pic": "pic",
                    "createdAt": "timestamp",
                    "updatedAt": "timestamp",
                    "__v": 0
                },
                {
                    "_id": "_id",
                    "full_name": "full_name",
                    "username": "username",
                    "email": "email",
                    "password": "password",
                    "role": "role",
                    "pic": "pic",
                    "createdAt": "timestamp",
                    "updatedAt": "timestamp",
                    "__v": 0
                }
            ]
  }
  ```

### Tambah data Users [POST]

Fitur untuk daftar akun user

- Request

        {
           "full_name": "Nama Lengkap",
           "username": "Username",
           "email": "Email",
           "password": "Password"
        }

- Response 201 (application/json)
  <br>Body
  ```
  {
    "message": "Berhasil Sign Up",
    "_id": "_id",
    "full_name": "full_name",
    "email": "email",
    "username": "username",
    "role": "role",
    "pic": "pic"
  }
  ```

## Users [/users/:id]

### Mengambil data user berdasarkan id [GET]

- Response 200 (application/json)

       {
           "_id": "_id",
            "full_name": "full_name",
            "username": "username",
            "email": "email",
            "password": "password",
            "role": "role",
            "pic": "pic",
            "createdAt": "timestamp",
            "updatedAt": "timestamp",
            "__v": 0
       }

### Hapus data user berdasarkan id [DELETE]

- Response 200 (application/json)
- body

        {
            "message": "User Removed"
        }

## Articles[/articles]

### Daftar semua articles [GET]

- Response 200 (application/json)

  ```
  {
      "article": [
          {
              "_id": "_id"
              "title": "title",
              "description": "description",
              "pic": "pic"

          },
          {
              "_id": "_id"
              "title": "title",
              "description": "description",
              "pic": "pic"

          }
      ]
  }
  ```

### B Tambah data Article [POST]

Fitur menambahkan datar users dengan role admin hanya bisa diakses oleh admin

- Request

          {
            "title": "title",
            "description": "description",
            "pic": "pic"
          }

- Response 201 (application/json)
  <br>Body
          
          {
            "_id": "_id"
            "title": "title",
            "description": "description",
            "pic": "pic"
          }

## Article [/articles/:id]

### Mengambil data article berdasarkan id [GET]

- Response 200 (application/json)

        {
            "_id": "_id"
            "title": "title",
            "description": "description",
            "pic": "pic"
        }

### Edit data articles berdasarkan id [PUT]

- Request

        {
            "title": "title",
            "description": "description",
            "pic": "pic"
        }

- Response 201 (application/json)
  <br>Body
  
        {
          "message": "Data video berhasil disimpan",
          "_id": "_id"
          "title": "title",
          "description": "description",
          "pic": "pic"
        }

### Hapus data articles berdasarkan id [DELETE]

- Response 200 (application/json)
  <br>body
  {
  "message": "Article removed"
  }

## Video[/videos]

### Daftar semua video [GET]

- Response 200 (application/json)

        [
            {
                "_id": "_id"
                "title": "title",
                "description": "description",
                "link" : "link",
                "pic": "pic"

            },
            {
                "title": "title",
                "description": "description",
                "link" : "link",
                "pic": "pic"

            }
        ]

### Tambah data video [POST]

Fitur menambahkan datar users dengan role admin hanya bisa diakses oleh admin

- Request

          [
              {
                  "title": "title",
                  "description": "description",
                  "link" : "link",
                  "pic": "pic"

              }
          ]

- Response 201 (application/json)

  - Body

        {
          "message": "Data video berhasil disimpan"
        }

## vidio [/videos/:id]

### Mengambil data video berdasarkan id [GET]

- Response 200 (application/json)

        {
            "title": "title",
            "description": "description",
            "link" : "link",
            "pic": "pic"
        }

### Edit data vidio berdasarkan id [PUT]

- Request

          {
              "title": "title",
              "description": "description",
              "link" : "link",
              "pic": "pic
          }

- Response 200 (application/json)
  <br>Body
          
          {
              "message": "Video updated"
              "title": "title",
              "description": "description",
              "link" : "link",
              "pic": "pic
          }

### Hapus data video berdasarkan id [DELETE]

- Response 200 (application/json)
  <br>body
        
        {
          "message": "Video removed"
        }

## Material[/materials]

### Daftar semua material [GET]

- Response 200 (application/json)

        [
            {
                "title": "",title
                "description": "description",
                "pic": "pic"
            },
            {
                "title": "",title
                "description": "description",
                "pic": "pic"
            }
        ]

### Tambah data material [POST]

Fitur menambahkan datar users dengan role admin hanya bisa diakses oleh admin

- Request

        {
          "title": "title",
          "description": "description",
          "pic": "pic"
        }

- Response 201 (application/json)
  <br>Body
        
        {
          "title": "title",
          "description": "description",
          "pic": "pic"
        }

## Materials [/materials/:id]

### Mengambil data material berdasarkan id [GET]

- Response 200 (application/json)

        {
          "title": "title",
          "description": "description",
          "pic": "pic"
        }

### Edit data material berdasarkan id [PUT]

- Request

        {
          "title": "title",
          "description": "description",
          "pic": "pic"
        }

- Response 200 (application/json)
  <br>Body

        {
          "message": "Material updated"
        }

### Hapus data material berdasarkan id [DELETE]

- Response 200 (application/json)
  <br>body

        {
          "message": "Material Removed"
        }
