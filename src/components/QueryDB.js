import { DynamoDB } from "aws-sdk";

const ddb = new DynamoDB.DocumentClient();

const queryDDB = async () => {
    const results = await ddb
        .scan({
            TableName: "complexity-helper-table"
        }).promise();
    return {
        statusCode: 200,
        body: JSON.stringify({
            results
        }),
    };
}

export default queryDDB;