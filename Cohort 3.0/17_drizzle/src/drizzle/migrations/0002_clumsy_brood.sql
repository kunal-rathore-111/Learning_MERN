CREATE TYPE "public"."userRole" AS ENUM('Admin', 'Basic');--> statement-breakpoint
CREATE TABLE "categoryTable" (
	"id" uuid PRIMARY KEY NOT NULL,
	"categoryName" varchar(400) NOT NULL
);
--> statement-breakpoint
CREATE TABLE "postCategoryTable" (
	"postId" uuid NOT NULL,
	"categoryId" uuid NOT NULL,
	CONSTRAINT "postCategoryTable_categoryId_postId_pk" PRIMARY KEY("categoryId","postId")
);
--> statement-breakpoint
CREATE TABLE "postTable" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"caption" varchar(400) NOT NULL,
	"createdAt" timestamp DEFAULT now() NOT NULL,
	"updatedAt" timestamp DEFAULT now() NOT NULL,
	"autorId" uuid NOT NULL
);
--> statement-breakpoint
CREATE TABLE "userPreferencesTable" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"emailUpdates" boolean DEFAULT false NOT NULL,
	"referUser" uuid NOT NULL
);
--> statement-breakpoint
ALTER TABLE "userstable" ADD COLUMN "age" integer NOT NULL;--> statement-breakpoint
ALTER TABLE "userstable" ADD COLUMN "email" varchar(400) NOT NULL;--> statement-breakpoint
ALTER TABLE "userstable" ADD COLUMN "userRole" "userRole" DEFAULT 'Basic' NOT NULL;--> statement-breakpoint
ALTER TABLE "postCategoryTable" ADD CONSTRAINT "postCategoryTable_postId_postTable_id_fk" FOREIGN KEY ("postId") REFERENCES "public"."postTable"("id") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "postCategoryTable" ADD CONSTRAINT "postCategoryTable_categoryId_categoryTable_id_fk" FOREIGN KEY ("categoryId") REFERENCES "public"."categoryTable"("id") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "postTable" ADD CONSTRAINT "postTable_autorId_userstable_id_fk" FOREIGN KEY ("autorId") REFERENCES "public"."userstable"("id") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "userPreferencesTable" ADD CONSTRAINT "userPreferencesTable_referUser_userstable_id_fk" FOREIGN KEY ("referUser") REFERENCES "public"."userstable"("id") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
CREATE INDEX "emailIndex" ON "userstable" USING btree ("email");--> statement-breakpoint
ALTER TABLE "userstable" ADD CONSTRAINT "userstable_email_unique" UNIQUE("email");--> statement-breakpoint
ALTER TABLE "userstable" ADD CONSTRAINT "uniqueNameandAge" UNIQUE("age","username");