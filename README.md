# Amplify-starter


## Configure the Amplify CLI
To set up the Amplify CLI on your local machine, you have to configure it to connect to your AWS account.

> If you already have an AWS profile with credentials on your machine, you can skip this step.

> If you are using CLI version < 10.8.0 go to Configure CLI < 10.8.0

Configure Amplify by running the following command:
```bash
amplify configure
```
`amplify configure` will ask you to sign into the AWS Console.

Once you're signed in, Amplify CLI will ask you to create an IAM user.

> Amazon IAM (Identity and Access Management) enables you to manage users and user permissions in AWS. You can learn more about Amazon IAM here.

```bash
Specify the AWS Region
? region:  # Your preferred region
Follow the instructions at
https://docs.amplify.aws/cli/start/install/#configure-the-amplify-cli

to complete the user creation in the AWS console
https://console.aws.amazon.com/iamv2/home#/users/create
```

Navigate to the IAM User creation page if it's not already open.

Enter a User name and select Next. You can name the user anything but we'll call it "amplify-dev".

Select Attach policies directly and select AdministratorAccess-Amplify as the Permissions policy. Select Next.

On the Review page, check that everything looks good and select Create user.

This will redirect to the users list page. Select the user you just created.

On the user details page, navigate to the Security credentials tab, scroll down to Access keys and select Create access keys.

On the next page, select Command Line Interface, acknowledge the warning, and select Next.

On the next page select Create access key. You’ll then see a page with the access keys for the user. Use the copy icon to copy these values to your clipboard, then return to the Amplify CLI.

Enter the values you just copied into the corresponding CLI prompts.
```bash
Enter the access key of the newly created user:
? accessKeyId:  # YOUR_ACCESS_KEY_ID
? secretAccessKey:  # YOUR_SECRET_ACCESS_KEY
This would update/create the AWS Profile in your local machine
? Profile Name:  # (default)

Successfully set up the new user.
```
