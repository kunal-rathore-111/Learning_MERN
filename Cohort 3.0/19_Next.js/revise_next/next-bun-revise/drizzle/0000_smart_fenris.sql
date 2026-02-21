CREATE TABLE "userTable" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"username" text NOT NULL,
	"email" text NOT NULL,
	CONSTRAINT "userTable_email_unique" UNIQUE("email")
);
