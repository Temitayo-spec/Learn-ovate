// since the backend have not been deployed, i'm going to be using 'http://localhost:8000/'
// during production, change 'http://localhost:8000/' to the origin of the deployed backend e.g 'https://learnovate-api.com/'


var Token = 'e63bf34d63f7617a8ff080856bb7cfdb5ee4f03f'


function login(username, password){
    // this fuctions logs in any type of user and returns the user details if successful

    // check api docs for example of response object if succesful or vice versa

    // this also returns the user token which will be needed in some function

    return fetch('http://localhost:8000/login', {
        method: 'POST',
        body: JSON.stringify({
            username: username,
            password: password
        }),
        headers: {
            'Content-Type': "application/json; charset=UTF-8"
        }
    })
    .then(response => response.json())
}

// use case
/*
login('buhari', 'boybad').then(
    data => {
        console.log(data)
        // anything you wanna do with the data
    }
)
*/


function check(username, email){
    /*Function to Check Availability of User Email and User Username.

    If username is an empty string, this means that the Client is checking Email Availability.
    If email is an empty String, this means that the Client is checking Username Availability.
    */

    return fetch('http://localhost:8000/check', {
        method: 'POST', 
        body: JSON.stringify({
            username: username,
            email: email
        }),
        headers: {
            'Content-Type': "application/json; charset=UTF-8"
        }
    })
    .then(response => response.json())
}

// use case
/*
    check('test', 'test@gmail.com')
    .then(data => {
        // do anything with the data
        consoe.log(data)
    }
*/


function change_pasword(current_password, new_password, confirm_password, token){
    // function to update a user password
    // this requires the user to be logged in, so we have to give the server the token 
    // of the user which can be accessible from the login funtion of registration functions

    return fetch('http://localhost:8000/change-password', {
        method: 'PUT',
        body: JSON.stringify({
            current_password: current_password,
            new_password: new_password,
            confirm_password: confirm_password,
        }),
        headers: {
            'Content-Type': "application/json; charset=UTF-8",
            'Authorization': `Token ${token}`
        }
    })
    .then(response => response.json())
}

// use case
/*
change_pasword('test', 'newtest', 'newtest', 'e63bf34d63f7617a8ff080856bb7cfdb5ee4f03f')
.then(data => {
    console.log(data)
})
*/

function change_phone_number(phone_number, token){
    /*
        this also needs the user to be logged in, so the token is needed
    */
   return fetch('http://localhost:8000/change_phone_number', {
       method: 'PUT',
       body: JSON.stringify({
           phone_number: phone_number
       }),
       headers: {
        'Content-Type': "application/json; charset=UTF-8",
        'Authorization': `Token ${token}`
       }
   })
   .then(response => response.json())
}

// use case
/*
change_phone_number('08123456789', 'e63bf34d63f7617a8ff080856bb7cfdb5ee4f03f')
.then(data => {
    // anything you wannna do with the data
    console.log(data)
})
*/

function student_detail(student_id, token=null){
    /*
        this is used to get a particular student details, 
        its going to return all the student details if token is passed.
        basically what the login func returns,  but we dont want to be logging in everytime
        we need student details in the frontend,
        if the token is not passed, it is going to return the basic data of a student and leave out the 
        vital information
    */
   if (token){
        return fetch(`http://localhost:8000/student-detail/${student_id}`,{
            method: 'GET',
            headers: {
            'Authorization': `Token ${token}`
            }
        })
        .then(response => response.json())
   }else{
        return fetch(`http://localhost:8000/student-detail/${student_id}`)
        .then(response => response.json())
   }
}

// use case 
/*
student-detail(8)
.then(data => {
    // anything to do with the data
    console.log(data);
})
*/


function update_student_detail(student_id, username, email, 
    first_name, last_name, dob, phone_number, 
    profile_iamge, gender, bio, token){
    /*
        dob type: YYYY-MM-DD
        gender types: [
            'M',
            'F',
            'N'
        ]
        profile_image: a link to a jpeg file aor any picture format.

        to update a student details, every field must be passed to the server
        the fields that the client wants to update can be different and the ones that the client isnt
        updating should be the same as before.
        also this returns the updated student details.
        and the token must be passed to update student detail
    */
   return fetch(`http://localhost:8000/student-detail/${student_id}`, {
       method: 'PUT',
       body: JSON.stringify({
            user: {
                username: username,
                email: email,
                first_name: first_name,
                last_name: last_name,
            },
            dob: dob,
            phone_number: phone_number,
            profile_image: profile_iamge,
            gender: gender,
            bio: bio,
       }),
       headers: {
        'Content-Type': "application/json; charset=UTF-8",
        'Authorization': `Token ${token}`
       }
   })
   .then(response => response.json())
}

// use case
/*
update_student_detail(8, 'buhari', 'buhari@badgovt.com', 'buhari', 'muhammad', '11-11-1989', '081234567', 'picture_link', 'M', 'im the worst president', 'e63bf34d63f7617a8ff080856bb7cfdb5ee4f03f' )
.then(data => {
    // anything to do with the data
    console.log(data)
})
*/


function instructor_detail(instructor_id, token=null){
    /*
        this is used to get a particular instructor details, 
        its going to return all the instructor details if token is passed.
        basically what the login func returns,  but we dont want to be logging in everytime
        we need instructor details in the frontend,
        if the token is not passed, it is going to return the basic data of an instructor and leave out the 
        vital information
    */
   if (token){
        return fetch(`http://localhost:8000/instructor-detail/${instructor_id}`,{
            method: 'GET',
            headers: {
            'Authorization': `Token ${token}`
            }
        })
        .then(response => response.json())
   }else{
        return fetch(`http://localhost:8000/instructor-detail/${instructor_id}`)
        .then(response => response.json())
   }
}

// use case 
/*
instructor-detail(8)
.then(data => {
    // anything to do with the data
    console.log(data);
})
*/


function update_instructor_detail(instructor_id, username, email, first_name,
     last_name, dob, phone_number, profile_image, gender, token){
    /*
        dob type: YYYY-MM-DD
        gender types: [
            'M',
            'F',
            'N'
        ]
        profile_image: a link to a jpeg file aor any picture format.

        to update an instructor detail, every field must be passed to the server
        the fields that the client wants to update can be different and the ones that the client isnt
        updating should be the same as before.
        also this returns the updated instructor details.
        and the token must be passed to update instructor detail
    */
   return fetch(`http://localhost:8000/instructor-detail/${instructor_id}`, {
       method: 'PUT',
       body: JSON.stringify({
            user: {
                username: username,
                email: email,
                first_name: first_name,
                last_name: last_name,
            },
            dob: dob,
            phone_number: phone_number,
            profile_image: profile_image,
            gender: gender,
       }),
       headers: {
        'Content-Type': "application/json; charset=UTF-8",
        'Authorization': `Token ${token}`
       }
   })
   .then(response => response.json())
}

// use case
/*
update_instructor_detail(8, 'buhari', 'buhari@badgovt.com', 'buhari', 'muhammad', '11-11-1989', '081234567', 'picture_link', 'M', 'e63bf34d63f7617a8ff080856bb7cfdb5ee4f03f' )
.then(data => {
    // anything to do with the data
    console.log(data)
})
*/

function google(auth_token, author_type){
    /*
        this function is for google authentication,
        it works for both registration and login.

        auth_token: this is google auth token that the frontend will get from google.
        there is a google html file that can be used for testing to get am auth token through the email
        instructions are there to use the file

        author_type: this is the type of user the frontend wants to register or login.
        input 'in' for instructor or 'st' for students.

        returns instructor or student details
    */ 

    return fetch('http://localhost:8000/google', {
        method: 'POST',
        body: JSON.stringify({
            auth_token: auth_token,
            author_type: author_type
        }),
        headers: {
            'Content-Type': "application/json; charset=UTF-8",
        }
    })
    .then(response => response.json())
}


function student_register(username, email, password, first_name='',
     last_name='', dob=null, phone_number=null, profile_image=null,
      gender='N', bio=null){
        /*
            this is to register a student, 
            the username, password and email are compulsory, the other fields can be empty
            gender type: [
                M,
                F,
                N,
            ]
        */
       return fetch('http://localhost:8000/student/register', {
           method: 'POST',
           body: JSON.stringify({
            user: {
                username: username,
                email: email,
                password: password,
                first_name: first_name,
                last_name: last_name
            },
            
            dob: dob,
            phone_number: phone_number,
            profile_image: profile_image,
            gender: gender,
            bio: bio
           }),
           headers: {
            'Content-Type': "application/json; charset=UTF-8",
           }
       })
       .then(response => response.json())
}


function instructor_register(username, email, password, first_name='',
    last_name='', dob=null, phone_number=null, profile_image=null,
     gender='N'){
       /*
           this is to register an instructor, 
           the username, password and email are compulsory, the other fields can be empty
           gender type: [
               M,
               F,
               N,
           ]
       */
      return fetch('http://localhost:8000/instructor/register', {
          method: 'POST',
          body: JSON.stringify({
           user: {
               username: username,
               email: email,
               password: password,
               first_name: first_name,
               last_name: last_name
           },
           dob: dob,
           phone_number: phone_number,
           profile_image: profile_image,
           gender: gender
          }),
          headers: {
           'Content-Type': "application/json; charset=UTF-8",
          }
      })
      .then(response => response.json())
}


function discussions(course='', catergory='', title='', date_after='', date_before=''){
    /*
        this is a request to get all the discusiions.
        the params are used to fillter through the discussions
        if all params are empty, its going to return all discussions

        date format: YYYY-MM-DD
    */
   return fetch(`http://localhost:8000/discussion/?category=${catergory}&course=${course}&title=${title}&date_after=${date_after}&date_before=${date_before}`)
   .then(response => response.json())
}


function create_discussion(title, body, image, is_private, is_anonymous, 
                    topic_id, course_id, category_id, tutorial_id, token){
        /*
            used for creating discussion
         */
        return fetch('http://localhost:8000/discussion/create', {
            method: 'POST',
            body: JSON.stringify({
                    title: title,
                    body: body,
                    image: image,
                    is_private: is_private,
                    is_anonymous: is_anonymous,
                    topic_id: topic_id,
                    course_id: course_id,
                    category_id: category_id,
                    tutorial_id: tutorial_id
            }),
            headers: {
                'Content-Type': "application/json; charset=UTF-8",
                'Authorization': `Token ${token}`
               }
        })
}


function comment(discussion_id, body, token){
    // comment on a discussion

    return fetch('http://localhost:8000/discussion/comment', {
        method: 'POST',
        body: JSON.stringify({
            discussion_id: discussion_id,
            body: body
        }),
        headers: {
            'Content-Type': "application/json; charset=UTF-8",
            'Authorization': `Token ${token}`
        }
    })
    .then(response => response.json())
}


function notifications(token){
    // get notifications of a user

    return fetch('http://localhost:8000/discussion/notifications', {
        method: 'GET',
        headers: {
            'Authorization': `Token ${token}`
        }
    })
    .then(response => response.json())
}
