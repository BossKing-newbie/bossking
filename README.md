# bossking
属于Boss_king的代码项目<br>
#2019/09/03 纪念第一次使用github 
I hope this is not my last enter!
Today I study mysql should know and should understand!
记录今天的mysql应知应会的知识点！
第一章 菜鸟篇
 数据库：保存有组织的数据的内容。
 表：某种特定类型数据的结构化清单。
 使用数据库：use 数据库名;
 显示数据库信息: SHOW DATABASES;
 数据库内的列表：SHOW TABLES;
 show 也可以用来显示表列: SHOW Columns from 表名;
 select DISTINCT : 返回唯一值（筛除重复值）
 Limit 5,5 :指示从Mysql返回从第五行开始的五行，第一个数为开始位置，第二个数为要检索的行数。
 子句：order by (默认升序)ASC (降序)DESC.
 order by 字段 limit 1;返回最大值
 where子句的位置：order by 和 where 子句，order by 位于 where 之后.
 不匹配检查: <> 和 !=
 Between and :指定开始值和结束值。
 空值检查：where 字段 is null
 IN操作符：比or操作符更快.
 not操作符：一般配合IN操作符 NOT IN
 通配符进行过滤: LIKE操作符,百分号%通配符:区分大小写！
 下划线（_）:匹配单个字符
 #net time \\192.168.43.164 当前时间为 2019/9/4 10:12:43
 LIKE匹配整个列。如果被匹配的文本在列值中出现，LIKE将不会找到它，相应的行也不被返回（除非使用通配符）。而REGEXP在列值内进行匹配，如果被匹配的文本在列值中出现，REGEXP将会找到它，相应的行将被返回。这是一个非常重要的差别.
 REGEXP(regexp)：.是正则表达式中一个特殊的字符，它代表匹配任意一个字符，不区分大小写，如要区分大小写可使用Binary关键字.
 Concat() 拼接字符串；
 例子：SELECT Concat(字段名，'(' , 字段名 , ')')
 文本处理函数：RTrim()函数去除列值右边的空格
              Upper()函数将文本转换为大写
              Soundex()函数返回串的Soundex值
              SubString()返回子串的字符
 日期和时间处理函数：Date()返回日期时间的日期部分
                   Day() 返回一个日期的天数部分
                   Hour() 返回一个时间的小时部分
                   Minute() 返回一个时间的分钟部分
                   Month() 返回一个日期的月份部分
 数值处理函数：ABS()返回一个数的绝对值
              Cos()返回一个角度的余弦
 聚集函数：我们经常需要汇总数据而不用把它们实际检索出来，为此MySQL提供了专门的函数。使用这些函数，MySQL查询可用于检索数据，以便分析和报表生成。这种类型的检索例子有以下几种。
            1.确定表中行数（或者满足某个条件或包含某个特定值的行数）。
            2.获得表中行组的和。
            3.找出表列（或所有行或某些特定的行）的最大值、最小值和平均值。
            AVG（）函数：AVG()通过对表中行数计数并计算特定列值之和，求得该列的平均值。AVG()可用来返回所有列的平均值，也可以用来返回特定列或行的平均值。
            COUNT()函数：COUNT()函数进行计数。可利用COUNT()确定表中行的数目或符合特定条件的行的数目。
            MAX()函数：MAX()返回指定列中的最大值。MAX()要求指定列名。
            MIN()函数：MIN()的功能正好与MAX()功能相反，它返回指定列的最小值。与MAX()一样，MIN()要求指定列名
            SUM()函数：SUM()用来返回指定列值的和（总计）。
创建分组:分组是在SELECT语句的GROUP BY子句中建立的。
例子：GROUP BY子句必须出现在WHERE子句之后，ORDER BY子句之前。
GROUP BY子句必须出现在WHERE子句之后，ORDER BY子句之前。
try to see the change!
更新了一点点！
