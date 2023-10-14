from urllib import response
import yaml, json, requests, time, hashlib

DEBUG = True
class PrinterConnection():

    def __init__(self) -> None:
        self.ReadDataFromFile()

    def ReadDataFromFile(self):

        with open('UserData\LogInData.yml', 'r') as YamlFile:
            Data = yaml.load(YamlFile, Loader=yaml.SafeLoader)

            if (DEBUG):
                print(Data)

            self.User = Data.get('User', '')
            self.UserKey = Data.get('UserKey', '')
            self.PrinterList = Data.get('MachineList', {})


    def InitPrinter(self):
        Timestamp = time.time()
        PostData =  {
                        'user' : self.User,
                        'timestamp': Timestamp,
                        'sign': hashlib.sha1(f'{self.User}{self.UserKey}{Timestamp}'.encode()).hexdigest(),
                        'items': self.PrinterList
                    }
        PostJson = json.dumps(PostData)
        if (DEBUG):
            print(PostJson)
        ApiUrl = 'https://open.xpyun.net/api/openapi/xprinter/addPrinters'

        Response = requests.post(ApiUrl, json=PostJson)

        print(Response.status_code)
        print(Response.json())


if __name__ == '__main__':
    Driver = PrinterConnection()
    Driver.InitPrinter()