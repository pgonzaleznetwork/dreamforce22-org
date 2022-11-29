public with sharing class AccountCreation {
    
    public static void createAccount(){
        Account account = new Account();
        account.Name = 'apex';
        insert account;
    }

}
