@IsTest
public with sharing class AccountCreationTests {

    @IsTest
    public static void createAccount(){
        
        Test.startTest();
        AccountCreation.createAccount();
        Test.stopTest();
        
    }
    
}
